import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlCandidate } from "./automlcandidate";
export declare class ListCandidatesForAutoMlJobResponse extends SpeakeasyBase {
    candidates: AutoMlCandidate[];
    nextToken?: string;
}
