import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ContentBaseLocationDescription
/** 
 * The description of the S3 base location that holds the application.
**/
export class S3ContentBaseLocationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=BasePath" })
  basePath?: string;

  @Metadata({ data: "json, name=BucketARN" })
  bucketArn: string;
}
