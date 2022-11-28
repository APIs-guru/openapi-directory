import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketCountPolicyAllowsUnencryptedObjectUploads
/** 
 * Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are uploaded to the buckets.
**/
export class BucketCountPolicyAllowsUnencryptedObjectUploads extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowsUnencryptedObjectUploads" })
  allowsUnencryptedObjectUploads?: number;

  @SpeakeasyMetadata({ data: "json, name=deniesUnencryptedObjectUploads" })
  deniesUnencryptedObjectUploads?: number;

  @SpeakeasyMetadata({ data: "json, name=unknown" })
  unknown?: number;
}
