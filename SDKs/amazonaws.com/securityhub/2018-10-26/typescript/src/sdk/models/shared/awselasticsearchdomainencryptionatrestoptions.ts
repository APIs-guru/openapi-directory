import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticsearchDomainEncryptionAtRestOptions
/** 
 * Details about the configuration for encryption at rest.
**/
export class AwsElasticsearchDomainEncryptionAtRestOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;
}
