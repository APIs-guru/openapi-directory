import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



export class CopySnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Snapshot" })
  snapshot?: Snapshot;
}
