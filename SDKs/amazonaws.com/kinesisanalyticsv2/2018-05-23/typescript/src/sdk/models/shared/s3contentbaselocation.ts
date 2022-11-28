import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ContentBaseLocation
/** 
 * The S3 bucket that holds the application information.
**/
export class S3ContentBaseLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BasePath" })
  basePath?: string;

  @SpeakeasyMetadata({ data: "json, name=BucketARN" })
  bucketArn: string;
}
