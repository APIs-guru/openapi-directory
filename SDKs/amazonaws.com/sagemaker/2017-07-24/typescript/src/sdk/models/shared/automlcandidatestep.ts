import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CandidateStepTypeEnum } from "./candidatesteptypeenum";



// AutoMlCandidateStep
/** 
 * Information about the steps for a candidate and what step it is working on.
**/
export class AutoMlCandidateStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CandidateStepArn" })
  candidateStepArn: string;

  @SpeakeasyMetadata({ data: "json, name=CandidateStepName" })
  candidateStepName: string;

  @SpeakeasyMetadata({ data: "json, name=CandidateStepType" })
  candidateStepType: CandidateStepTypeEnum;
}
