import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ContentBaseLocation
/** 
 * The S3 bucket that holds the application information.
**/
export class S3ContentBaseLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=BasePath" })
  basePath?: string;

  @Metadata({ data: "json, name=BucketARN" })
  bucketArn: string;
}
