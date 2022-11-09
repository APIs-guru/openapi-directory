import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringConstraintsResource } from "./monitoringconstraintsresource";


// ModelQualityBaselineConfig
/** 
 * Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
**/
export class ModelQualityBaselineConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseliningJobName" })
  baseliningJobName?: string;

  @Metadata({ data: "json, name=ConstraintsResource" })
  constraintsResource?: MonitoringConstraintsResource;
}
