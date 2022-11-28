import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterParameterStatus } from "./clusterparameterstatus";



// ClusterParameterGroupStatus
/** 
 * Describes the status of a parameter group.
**/
export class ClusterParameterGroupStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterParameterStatus })
  clusterParameterStatusList?: ClusterParameterStatus[];

  @SpeakeasyMetadata()
  parameterApplyStatus?: string;

  @SpeakeasyMetadata()
  parameterGroupName?: string;
}
