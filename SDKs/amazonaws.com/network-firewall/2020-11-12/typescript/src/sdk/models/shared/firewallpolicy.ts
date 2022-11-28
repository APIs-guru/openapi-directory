import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatefulRuleGroupReference } from "./statefulrulegroupreference";
import { CustomAction } from "./customaction";
import { StatelessRuleGroupReference } from "./statelessrulegroupreference";



// FirewallPolicy
/** 
 * <p>The firewall policy defines the behavior of a firewall using a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p> <p>This, along with <a>FirewallPolicyResponse</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.</p>
**/
export class FirewallPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StatefulRuleGroupReferences", elemType: StatefulRuleGroupReference })
  statefulRuleGroupReferences?: StatefulRuleGroupReference[];

  @SpeakeasyMetadata({ data: "json, name=StatelessCustomActions", elemType: CustomAction })
  statelessCustomActions?: CustomAction[];

  @SpeakeasyMetadata({ data: "json, name=StatelessDefaultActions" })
  statelessDefaultActions: string[];

  @SpeakeasyMetadata({ data: "json, name=StatelessFragmentDefaultActions" })
  statelessFragmentDefaultActions: string[];

  @SpeakeasyMetadata({ data: "json, name=StatelessRuleGroupReferences", elemType: StatelessRuleGroupReference })
  statelessRuleGroupReferences?: StatelessRuleGroupReference[];
}
