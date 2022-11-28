import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportJobResource
/** 
 * Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
**/
export class ExportJobResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3UrlPrefix" })
  s3UrlPrefix: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentId" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=SegmentVersion" })
  segmentVersion?: number;
}
