import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BucketPolicy
/** 
 * Provides information about the permissions settings of the bucket policy for an S3 bucket.
**/
export class BucketPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowsPublicReadAccess" })
  allowsPublicReadAccess?: boolean;

  @Metadata({ data: "json, name=allowsPublicWriteAccess" })
  allowsPublicWriteAccess?: boolean;
}
