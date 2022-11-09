import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirewallMetadata
/** 
 * High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall.
**/
export class FirewallMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;
}
