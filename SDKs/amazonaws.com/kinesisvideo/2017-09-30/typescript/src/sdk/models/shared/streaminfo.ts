import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


// StreamInfo
/** 
 * An object describing a Kinesis video stream.
**/
export class StreamInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DataRetentionInHours" })
  dataRetentionInHours?: number;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
