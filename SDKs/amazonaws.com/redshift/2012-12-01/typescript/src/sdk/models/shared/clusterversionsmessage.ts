import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterVersion } from "./clusterversion";



// ClusterVersionsMessage
/** 
 * Contains the output from the <a>DescribeClusterVersions</a> action. 
**/
export class ClusterVersionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterVersion })
  clusterVersions?: ClusterVersion[];

  @SpeakeasyMetadata()
  marker?: string;
}
