import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringConstraintsResource } from "./monitoringconstraintsresource";
/**
 * The configuration for a baseline model bias job.
**/
export declare class ModelBiasBaselineConfig extends SpeakeasyBase {
    baseliningJobName?: string;
    constraintsResource?: MonitoringConstraintsResource;
}
