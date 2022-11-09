import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProcessingStoppingCondition
/** 
 * Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
**/
export class ProcessingStoppingCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxRuntimeInSeconds" })
  maxRuntimeInSeconds: number;
}
