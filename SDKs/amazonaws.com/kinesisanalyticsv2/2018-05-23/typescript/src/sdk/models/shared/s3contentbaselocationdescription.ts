import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ContentBaseLocationDescription
/** 
 * The description of the S3 base location that holds the application.
**/
export class S3ContentBaseLocationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BasePath" })
  basePath?: string;

  @SpeakeasyMetadata({ data: "json, name=BucketARN" })
  bucketArn: string;
}
