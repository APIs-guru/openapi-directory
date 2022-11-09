import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BucketCountPolicyAllowsUnencryptedObjectUploads
/** 
 * Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are uploaded to the buckets.
**/
export class BucketCountPolicyAllowsUnencryptedObjectUploads extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowsUnencryptedObjectUploads" })
  allowsUnencryptedObjectUploads?: number;

  @Metadata({ data: "json, name=deniesUnencryptedObjectUploads" })
  deniesUnencryptedObjectUploads?: number;

  @Metadata({ data: "json, name=unknown" })
  unknown?: number;
}
