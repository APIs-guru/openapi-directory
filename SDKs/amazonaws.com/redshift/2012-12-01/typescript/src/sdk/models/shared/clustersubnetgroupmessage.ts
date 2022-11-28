import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSubnetGroup } from "./clustersubnetgroup";



// ClusterSubnetGroupMessage
/** 
 * Contains the output from the <a>DescribeClusterSubnetGroups</a> action. 
**/
export class ClusterSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterSubnetGroup })
  clusterSubnetGroups?: ClusterSubnetGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
