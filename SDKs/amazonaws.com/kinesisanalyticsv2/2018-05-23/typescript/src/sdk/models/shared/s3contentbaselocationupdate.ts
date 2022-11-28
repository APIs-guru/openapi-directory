import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3ContentBaseLocationUpdate
/** 
 * The information required to update the S3 base location that holds the application.
**/
export class S3ContentBaseLocationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BasePathUpdate" })
  basePathUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=BucketARNUpdate" })
  bucketArnUpdate: string;
}
