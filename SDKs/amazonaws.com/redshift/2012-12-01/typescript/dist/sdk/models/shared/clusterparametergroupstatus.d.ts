import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterParameterStatus } from "./clusterparameterstatus";
/**
 * Describes the status of a parameter group.
**/
export declare class ClusterParameterGroupStatus extends SpeakeasyBase {
    clusterParameterStatusList?: ClusterParameterStatus[];
    parameterApplyStatus?: string;
    parameterGroupName?: string;
}
