import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoMlJobCompletionCriteria
/** 
 * How long a job is allowed to run, or how many candidates a job is allowed to generate.
**/
export class AutoMlJobCompletionCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxAutoMLJobRuntimeInSeconds" })
  maxAutoMlJobRuntimeInSeconds?: number;

  @Metadata({ data: "json, name=MaxCandidates" })
  maxCandidates?: number;

  @Metadata({ data: "json, name=MaxRuntimePerTrainingJobInSeconds" })
  maxRuntimePerTrainingJobInSeconds?: number;
}
