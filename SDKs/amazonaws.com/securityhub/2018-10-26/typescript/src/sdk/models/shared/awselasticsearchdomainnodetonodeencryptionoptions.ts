import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticsearchDomainNodeToNodeEncryptionOptions
/** 
 * Details about the configuration for node-to-node encryption.
**/
export class AwsElasticsearchDomainNodeToNodeEncryptionOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
