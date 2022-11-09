import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3ContentBaseLocationUpdate
/** 
 * The information required to update the S3 base location that holds the application.
**/
export class S3ContentBaseLocationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=BasePathUpdate" })
  basePathUpdate?: string;

  @Metadata({ data: "json, name=BucketARNUpdate" })
  bucketArnUpdate: string;
}
