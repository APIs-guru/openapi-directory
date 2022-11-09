import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatefulRuleGroupReference
/** 
 * Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group. 
**/
export class StatefulRuleGroupReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
