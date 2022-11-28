import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



// StreamInfo
/** 
 * An object describing a Kinesis video stream.
**/
export class StreamInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataRetentionInHours" })
  dataRetentionInHours?: number;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamARN" })
  streamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
