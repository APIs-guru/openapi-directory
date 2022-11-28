import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatelessRuleGroupReference
/** 
 * Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group. 
**/
export class StatelessRuleGroupReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
