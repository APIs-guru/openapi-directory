import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class ResizeClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
