import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshot } from "./dbsnapshot";



export class CopyDbSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSnapshot?: DbSnapshot;
}
