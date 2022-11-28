import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSubnetGroup } from "./clustersubnetgroup";



export class CreateClusterSubnetGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSubnetGroup?: ClusterSubnetGroup;
}
