import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringConstraintsResource } from "./monitoringconstraintsresource";



// ModelBiasBaselineConfig
/** 
 * The configuration for a baseline model bias job.
**/
export class ModelBiasBaselineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseliningJobName" })
  baseliningJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=ConstraintsResource" })
  constraintsResource?: MonitoringConstraintsResource;
}
