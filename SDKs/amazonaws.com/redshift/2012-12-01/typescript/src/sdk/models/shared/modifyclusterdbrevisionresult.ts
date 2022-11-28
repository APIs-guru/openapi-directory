import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class ModifyClusterDbRevisionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
