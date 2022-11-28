import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



export class RevokeSnapshotAccessResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  snapshot?: Snapshot;
}
