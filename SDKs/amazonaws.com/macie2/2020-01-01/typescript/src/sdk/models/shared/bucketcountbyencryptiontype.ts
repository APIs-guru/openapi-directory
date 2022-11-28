import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketCountByEncryptionType
/** 
 * Provides information about the number of S3 buckets that use certain types of server-side encryption by default or don't encrypt new objects by default. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.
**/
export class BucketCountByEncryptionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsManaged" })
  kmsManaged?: number;

  @SpeakeasyMetadata({ data: "json, name=s3Managed" })
  s3Managed?: number;

  @SpeakeasyMetadata({ data: "json, name=unencrypted" })
  unencrypted?: number;

  @SpeakeasyMetadata({ data: "json, name=unknown" })
  unknown?: number;
}
