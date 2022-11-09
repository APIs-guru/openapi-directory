import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivatedRule } from "./activatedrule";
export declare class ListActivatedRulesInRuleGroupResponse extends SpeakeasyBase {
    activatedRules?: ActivatedRule[];
    nextMarker?: string;
}
