import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshot } from "./dbsnapshot";



export class ModifyDbSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSnapshot?: DbSnapshot;
}
