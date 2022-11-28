import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class ModifyClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
