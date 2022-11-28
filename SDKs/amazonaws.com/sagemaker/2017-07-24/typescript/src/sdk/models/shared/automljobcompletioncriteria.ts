import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoMlJobCompletionCriteria
/** 
 * How long a job is allowed to run, or how many candidates a job is allowed to generate.
**/
export class AutoMlJobCompletionCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxAutoMLJobRuntimeInSeconds" })
  maxAutoMlJobRuntimeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxCandidates" })
  maxCandidates?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxRuntimePerTrainingJobInSeconds" })
  maxRuntimePerTrainingJobInSeconds?: number;
}
