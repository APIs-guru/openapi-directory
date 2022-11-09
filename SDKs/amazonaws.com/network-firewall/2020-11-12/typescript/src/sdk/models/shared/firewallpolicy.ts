import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatefulRuleGroupReference } from "./statefulrulegroupreference";
import { CustomAction } from "./customaction";
import { StatelessRuleGroupReference } from "./statelessrulegroupreference";


// FirewallPolicy
/** 
 * <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
**/
export class FirewallPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=StatefulRuleGroupReferences", elemType: shared.StatefulRuleGroupReference })
  statefulRuleGroupReferences?: StatefulRuleGroupReference[];

  @Metadata({ data: "json, name=StatelessCustomActions", elemType: shared.CustomAction })
  statelessCustomActions?: CustomAction[];

  @Metadata({ data: "json, name=StatelessDefaultActions" })
  statelessDefaultActions: string[];

  @Metadata({ data: "json, name=StatelessFragmentDefaultActions" })
  statelessFragmentDefaultActions: string[];

  @Metadata({ data: "json, name=StatelessRuleGroupReferences", elemType: shared.StatelessRuleGroupReference })
  statelessRuleGroupReferences?: StatelessRuleGroupReference[];
}
