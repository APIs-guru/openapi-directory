import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class DisableSnapshotCopyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
