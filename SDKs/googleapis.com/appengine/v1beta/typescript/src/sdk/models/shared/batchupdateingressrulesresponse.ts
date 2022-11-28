import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";



// BatchUpdateIngressRulesResponse
/** 
 * Response message for Firewall.UpdateAllIngressRules.
**/
export class BatchUpdateIngressRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ingressRules", elemType: FirewallRule })
  ingressRules?: FirewallRule[];
}
