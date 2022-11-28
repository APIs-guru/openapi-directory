import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSecurityGroup } from "./clustersecuritygroup";



export class RevokeClusterSecurityGroupIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSecurityGroup?: ClusterSecurityGroup;
}
