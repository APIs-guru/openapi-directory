import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSecurityGroup } from "./clustersecuritygroup";



export class AuthorizeClusterSecurityGroupIngressResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSecurityGroup?: ClusterSecurityGroup;
}
