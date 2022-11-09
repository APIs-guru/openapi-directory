import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringConstraintsResource } from "./monitoringconstraintsresource";


// ModelExplainabilityBaselineConfig
/** 
 * The configuration for a baseline model explainability job.
**/
export class ModelExplainabilityBaselineConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseliningJobName" })
  baseliningJobName?: string;

  @Metadata({ data: "json, name=ConstraintsResource" })
  constraintsResource?: MonitoringConstraintsResource;
}
