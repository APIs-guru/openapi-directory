import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonitoringStoppingCondition
/** 
 * A time limit for how long the monitoring job is allowed to run before stopping.
**/
export class MonitoringStoppingCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxRuntimeInSeconds" })
  maxRuntimeInSeconds: number;
}
