import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleTypeEnum } from "./ruletypeenum";


// RuleConfig
/** 
 * The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many controls must be enabled after a transaction completes.
**/
export class RuleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Inverted" })
  inverted: boolean;

  @Metadata({ data: "json, name=Threshold" })
  threshold: number;

  @Metadata({ data: "json, name=Type" })
  type: RuleTypeEnum;
}
