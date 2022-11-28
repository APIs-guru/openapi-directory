import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSecurityGroup } from "./clustersecuritygroup";



// ClusterSecurityGroupMessage
/** 
 * <p/>
**/
export class ClusterSecurityGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClusterSecurityGroup })
  clusterSecurityGroups?: ClusterSecurityGroup[];

  @SpeakeasyMetadata()
  marker?: string;
}
