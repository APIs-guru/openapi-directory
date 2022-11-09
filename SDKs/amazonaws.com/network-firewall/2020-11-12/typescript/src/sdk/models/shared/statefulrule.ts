import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatefulActionEnum } from "./statefulactionenum";
import { Header } from "./header";
import { RuleOption } from "./ruleoption";


// StatefulRule
/** 
 * A single 5-tuple stateful rule, for use in a stateful rule group.
**/
export class StatefulRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: StatefulActionEnum;

  @Metadata({ data: "json, name=Header" })
  header: Header;

  @Metadata({ data: "json, name=RuleOptions", elemType: shared.RuleOption })
  ruleOptions: RuleOption[];
}
