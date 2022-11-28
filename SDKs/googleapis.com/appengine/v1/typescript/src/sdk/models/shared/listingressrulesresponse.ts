import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";



// ListIngressRulesResponse
/** 
 * Response message for Firewall.ListIngressRules.
**/
export class ListIngressRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ingressRules", elemType: FirewallRule })
  ingressRules?: FirewallRule[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
