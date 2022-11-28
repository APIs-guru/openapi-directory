import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterParameterGroup } from "./clusterparametergroup";



export class CreateClusterParameterGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterParameterGroup?: ClusterParameterGroup;
}
