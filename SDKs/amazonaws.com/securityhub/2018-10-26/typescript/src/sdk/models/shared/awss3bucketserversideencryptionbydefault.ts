import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsS3BucketServerSideEncryptionByDefault
/** 
 * Specifies the default server-side encryption to apply to new objects in the bucket.
**/
export class AwsS3BucketServerSideEncryptionByDefault extends SpeakeasyBase {
  @Metadata({ data: "json, name=KMSMasterKeyID" })
  kmsMasterKeyId?: string;

  @Metadata({ data: "json, name=SSEAlgorithm" })
  sseAlgorithm?: string;
}
