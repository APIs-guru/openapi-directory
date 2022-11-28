import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatefulActionEnum } from "./statefulactionenum";
import { Header } from "./header";
import { RuleOption } from "./ruleoption";



// StatefulRule
/** 
 * A single 5-tuple stateful rule, for use in a stateful rule group.
**/
export class StatefulRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: StatefulActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Header" })
  header: Header;

  @SpeakeasyMetadata({ data: "json, name=RuleOptions", elemType: RuleOption })
  ruleOptions: RuleOption[];
}
