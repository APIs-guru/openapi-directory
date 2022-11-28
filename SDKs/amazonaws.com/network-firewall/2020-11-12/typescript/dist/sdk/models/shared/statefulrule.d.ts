import { SpeakeasyBase } from "../../../internal/utils";
import { StatefulActionEnum } from "./statefulactionenum";
import { Header } from "./header";
import { RuleOption } from "./ruleoption";
/**
 * A single 5-tuple stateful rule, for use in a stateful rule group.
**/
export declare class StatefulRule extends SpeakeasyBase {
    action: StatefulActionEnum;
    header: Header;
    ruleOptions: RuleOption[];
}
