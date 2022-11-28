import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSummary } from "./rulesummary";
export declare class ListRulesResponse extends SpeakeasyBase {
    nextMarker?: string;
    rules?: RuleSummary[];
}
