import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirewallMetadata
/** 
 * High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall.
**/
export class FirewallMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName?: string;
}
