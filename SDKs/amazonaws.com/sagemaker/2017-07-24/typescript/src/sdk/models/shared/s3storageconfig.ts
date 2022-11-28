import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3StorageConfig
/** 
 * The Amazon Simple Storage (Amazon S3) location and and security configuration for <code>OfflineStore</code>.
**/
export class S3StorageConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolvedOutputS3Uri" })
  resolvedOutputS3Uri?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
