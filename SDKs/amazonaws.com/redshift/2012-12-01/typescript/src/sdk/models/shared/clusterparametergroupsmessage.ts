import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterParameterGroup } from "./clusterparametergroup";



// ClusterParameterGroupsMessage
/** 
 * Contains the output from the <a>DescribeClusterParameterGroups</a> action. 
**/
export class ClusterParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ClusterParameterGroup })
  parameterGroups?: ClusterParameterGroup[];
}
