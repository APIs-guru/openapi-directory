import { SpeakeasyBase } from "../../../internal/utils";
import { CandidateStepTypeEnum } from "./candidatesteptypeenum";
/**
 * Information about the steps for a candidate and what step it is working on.
**/
export declare class AutoMlCandidateStep extends SpeakeasyBase {
    candidateStepArn: string;
    candidateStepName: string;
    candidateStepType: CandidateStepTypeEnum;
}
