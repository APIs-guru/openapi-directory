import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringConstraintsResource } from "./monitoringconstraintsresource";


// ModelBiasBaselineConfig
/** 
 * The configuration for a baseline model bias job.
**/
export class ModelBiasBaselineConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseliningJobName" })
  baseliningJobName?: string;

  @Metadata({ data: "json, name=ConstraintsResource" })
  constraintsResource?: MonitoringConstraintsResource;
}
