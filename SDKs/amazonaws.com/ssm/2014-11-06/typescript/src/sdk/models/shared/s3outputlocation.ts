import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3OutputLocation
/** 
 * An S3 bucket where you want to store the results of this request.
**/
export class S3OutputLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=OutputS3BucketName" })
  outputS3BucketName?: string;

  @Metadata({ data: "json, name=OutputS3KeyPrefix" })
  outputS3KeyPrefix?: string;

  @Metadata({ data: "json, name=OutputS3Region" })
  outputS3Region?: string;
}
