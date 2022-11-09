import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallRule } from "./firewallrule";


// ListIngressRulesResponse
/** 
 * Response message for Firewall.ListIngressRules.
**/
export class ListIngressRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ingressRules", elemType: shared.FirewallRule })
  ingressRules?: FirewallRule[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
