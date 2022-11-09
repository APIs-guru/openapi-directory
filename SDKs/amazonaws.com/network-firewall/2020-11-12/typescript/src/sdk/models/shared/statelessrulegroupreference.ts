import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatelessRuleGroupReference
/** 
 * Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group. 
**/
export class StatelessRuleGroupReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=Priority" })
  priority: number;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
