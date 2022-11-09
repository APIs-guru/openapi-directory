import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FirewallRuleActionEnum {
    UnspecifiedAction = "UNSPECIFIED_ACTION"
,    Allow = "ALLOW"
,    Deny = "DENY"
}


// FirewallRule
/** 
 * A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests.
**/
export class FirewallRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: FirewallRuleActionEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=sourceRange" })
  sourceRange?: string;
}
