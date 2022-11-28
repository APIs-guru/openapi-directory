import { SpeakeasyBase } from "../../../internal/utils";
import { TrialSummary } from "./trialsummary";
export declare class ListTrialsResponse extends SpeakeasyBase {
    nextToken?: string;
    trialSummaries?: TrialSummary[];
}
