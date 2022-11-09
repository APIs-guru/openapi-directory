import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleGroupSummary } from "./rulegroupsummary";
export declare class ListRuleGroupsResponse extends SpeakeasyBase {
    nextMarker?: string;
    ruleGroups?: RuleGroupSummary[];
}
