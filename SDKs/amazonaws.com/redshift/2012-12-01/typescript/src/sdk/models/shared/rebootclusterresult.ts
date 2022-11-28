import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class RebootClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
