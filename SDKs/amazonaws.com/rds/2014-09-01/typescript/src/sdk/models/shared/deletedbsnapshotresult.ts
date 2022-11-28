import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshot } from "./dbsnapshot";



export class DeleteDbSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSnapshot?: DbSnapshot;
}
