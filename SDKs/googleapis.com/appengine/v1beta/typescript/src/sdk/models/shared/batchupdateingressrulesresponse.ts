import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallRule } from "./firewallrule";


// BatchUpdateIngressRulesResponse
/** 
 * Response message for Firewall.UpdateAllIngressRules.
**/
export class BatchUpdateIngressRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ingressRules", elemType: shared.FirewallRule })
  ingressRules?: FirewallRule[];
}
