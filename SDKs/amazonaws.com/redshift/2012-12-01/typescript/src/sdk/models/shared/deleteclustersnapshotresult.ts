import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



export class DeleteClusterSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  snapshot?: Snapshot;
}
