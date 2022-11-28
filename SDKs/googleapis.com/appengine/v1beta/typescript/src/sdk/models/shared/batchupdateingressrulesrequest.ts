import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRule } from "./firewallrule";



// BatchUpdateIngressRulesRequest
/** 
 * Request message for Firewall.BatchUpdateIngressRules.
**/
export class BatchUpdateIngressRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ingressRules", elemType: FirewallRule })
  ingressRules?: FirewallRule[];
}
