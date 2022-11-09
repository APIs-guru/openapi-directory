import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallRule } from "./firewallrule";


// BatchUpdateIngressRulesRequest
/** 
 * Request message for Firewall.BatchUpdateIngressRules.
**/
export class BatchUpdateIngressRulesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ingressRules", elemType: shared.FirewallRule })
  ingressRules?: FirewallRule[];
}
