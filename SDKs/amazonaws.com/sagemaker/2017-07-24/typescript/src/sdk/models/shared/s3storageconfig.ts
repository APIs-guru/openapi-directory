import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3StorageConfig
/** 
 * The Amazon Simple Storage (Amazon S3) location and and security configuration for <code>OfflineStore</code>.
**/
export class S3StorageConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=ResolvedOutputS3Uri" })
  resolvedOutputS3Uri?: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
