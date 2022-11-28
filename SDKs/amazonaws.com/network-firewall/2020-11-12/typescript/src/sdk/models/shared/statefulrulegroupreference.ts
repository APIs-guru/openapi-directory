import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatefulRuleGroupReference
/** 
 * Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group. 
**/
export class StatefulRuleGroupReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
