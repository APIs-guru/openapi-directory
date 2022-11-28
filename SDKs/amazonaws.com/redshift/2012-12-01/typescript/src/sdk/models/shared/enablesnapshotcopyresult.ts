import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class EnableSnapshotCopyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
