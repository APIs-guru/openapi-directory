import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitoringStoppingCondition
/** 
 * A time limit for how long the monitoring job is allowed to run before stopping.
**/
export class MonitoringStoppingCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxRuntimeInSeconds" })
  maxRuntimeInSeconds: number;
}
