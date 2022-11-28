import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSubnetGroup } from "./clustersubnetgroup";



export class ModifyClusterSubnetGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterSubnetGroup?: ClusterSubnetGroup;
}
