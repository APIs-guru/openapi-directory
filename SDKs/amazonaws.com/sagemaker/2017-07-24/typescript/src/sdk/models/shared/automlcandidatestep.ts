import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CandidateStepTypeEnum } from "./candidatesteptypeenum";


// AutoMlCandidateStep
/** 
 * Information about the steps for a candidate and what step it is working on.
**/
export class AutoMlCandidateStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=CandidateStepArn" })
  candidateStepArn: string;

  @Metadata({ data: "json, name=CandidateStepName" })
  candidateStepName: string;

  @Metadata({ data: "json, name=CandidateStepType" })
  candidateStepType: CandidateStepTypeEnum;
}
