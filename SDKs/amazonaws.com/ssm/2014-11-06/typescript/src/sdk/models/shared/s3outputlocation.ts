import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3OutputLocation
/** 
 * An S3 bucket where you want to store the results of this request.
**/
export class S3OutputLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OutputS3BucketName" })
  outputS3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputS3KeyPrefix" })
  outputS3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputS3Region" })
  outputS3Region?: string;
}
