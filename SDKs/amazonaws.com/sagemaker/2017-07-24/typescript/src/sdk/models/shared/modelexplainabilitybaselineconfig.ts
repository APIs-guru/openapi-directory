import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringConstraintsResource } from "./monitoringconstraintsresource";



// ModelExplainabilityBaselineConfig
/** 
 * The configuration for a baseline model explainability job.
**/
export class ModelExplainabilityBaselineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseliningJobName" })
  baseliningJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=ConstraintsResource" })
  constraintsResource?: MonitoringConstraintsResource;
}
