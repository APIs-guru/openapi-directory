import { SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentSummary } from "./trialcomponentsummary";
export declare class ListTrialComponentsResponse extends SpeakeasyBase {
    nextToken?: string;
    trialComponentSummaries?: TrialComponentSummary[];
}
