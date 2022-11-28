import { SpeakeasyBase } from "../../../internal/utils";
import { ExperimentSummary } from "./experimentsummary";
export declare class ListExperimentsResponse extends SpeakeasyBase {
    experimentSummaries?: ExperimentSummary[];
    nextToken?: string;
}
