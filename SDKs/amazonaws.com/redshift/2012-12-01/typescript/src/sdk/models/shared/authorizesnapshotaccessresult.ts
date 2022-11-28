import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



export class AuthorizeSnapshotAccessResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  snapshot?: Snapshot;
}
