import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringConstraintsResource } from "./monitoringconstraintsresource";



// ModelQualityBaselineConfig
/** 
 * Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
**/
export class ModelQualityBaselineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseliningJobName" })
  baseliningJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=ConstraintsResource" })
  constraintsResource?: MonitoringConstraintsResource;
}
