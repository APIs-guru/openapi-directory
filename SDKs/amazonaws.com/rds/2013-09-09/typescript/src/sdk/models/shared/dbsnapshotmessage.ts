import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshot } from "./dbsnapshot";



export class DbSnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSnapshot })
  dbSnapshots?: DbSnapshot[];

  @SpeakeasyMetadata()
  marker?: string;
}
