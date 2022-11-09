import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticsearchDomainEncryptionAtRestOptions
/** 
 * Details about the configuration for encryption at rest.
**/
export class AwsElasticsearchDomainEncryptionAtRestOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;
}
