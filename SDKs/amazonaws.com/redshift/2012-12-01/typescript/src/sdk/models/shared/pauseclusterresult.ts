import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class PauseClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
