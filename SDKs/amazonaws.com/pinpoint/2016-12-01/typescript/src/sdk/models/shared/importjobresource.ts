import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";



// ImportJobResource
/** 
 * Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
**/
export class ImportJobResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefineSegment" })
  defineSegment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format: FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=RegisterEndpoints" })
  registerEndpoints?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3Url" })
  s3Url: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentId" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentName" })
  segmentName?: string;
}
