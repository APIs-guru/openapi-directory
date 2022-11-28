import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



export class CreateClusterSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  snapshot?: Snapshot;
}
