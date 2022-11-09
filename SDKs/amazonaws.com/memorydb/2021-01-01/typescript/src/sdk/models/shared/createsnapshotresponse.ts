import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Snapshot } from "./snapshot";


export class CreateSnapshotResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Snapshot" })
  snapshot?: Snapshot;
}
