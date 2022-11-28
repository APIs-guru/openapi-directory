import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FirewallRuleActionEnum {
    UnspecifiedAction = "UNSPECIFIED_ACTION",
    Allow = "ALLOW",
    Deny = "DENY"
}


// FirewallRule
/** 
 * A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests.
**/
export class FirewallRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: FirewallRuleActionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceRange" })
  sourceRange?: string;
}
