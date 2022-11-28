import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSecurityGroup } from "./clustersecuritygroup";



export class CreateClusterSecurityGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSecurityGroup?: ClusterSecurityGroup;
}
