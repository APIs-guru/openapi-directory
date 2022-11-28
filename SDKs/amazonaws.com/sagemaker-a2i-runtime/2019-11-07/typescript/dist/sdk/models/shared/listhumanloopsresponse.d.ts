import { SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopSummary } from "./humanloopsummary";
export declare class ListHumanLoopsResponse extends SpeakeasyBase {
    humanLoopSummaries: HumanLoopSummary[];
    nextToken?: string;
}
