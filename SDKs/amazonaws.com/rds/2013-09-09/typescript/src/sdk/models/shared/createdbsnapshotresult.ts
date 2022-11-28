import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshot } from "./dbsnapshot";



export class CreateDbSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSnapshot?: DbSnapshot;
}
