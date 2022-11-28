import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



export class ModifySnapshotCopyRetentionPeriodResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cluster?: Cluster;
}
