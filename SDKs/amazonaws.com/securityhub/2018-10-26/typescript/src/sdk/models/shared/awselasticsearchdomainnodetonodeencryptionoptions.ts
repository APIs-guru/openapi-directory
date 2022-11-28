import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticsearchDomainNodeToNodeEncryptionOptions
/** 
 * Details about the configuration for node-to-node encryption.
**/
export class AwsElasticsearchDomainNodeToNodeEncryptionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
