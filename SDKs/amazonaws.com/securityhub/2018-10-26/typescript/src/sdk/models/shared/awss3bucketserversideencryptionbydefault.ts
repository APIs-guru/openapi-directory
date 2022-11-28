import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsS3BucketServerSideEncryptionByDefault
/** 
 * Specifies the default server-side encryption to apply to new objects in the bucket.
**/
export class AwsS3BucketServerSideEncryptionByDefault extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KMSMasterKeyID" })
  kmsMasterKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=SSEAlgorithm" })
  sseAlgorithm?: string;
}
