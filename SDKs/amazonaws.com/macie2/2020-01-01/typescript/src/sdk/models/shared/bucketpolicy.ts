import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketPolicy
/** 
 * Provides information about the permissions settings of the bucket policy for an S3 bucket.
**/
export class BucketPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowsPublicReadAccess" })
  allowsPublicReadAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowsPublicWriteAccess" })
  allowsPublicWriteAccess?: boolean;
}
