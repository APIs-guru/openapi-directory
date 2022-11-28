import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class RestoreFromClusterSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
