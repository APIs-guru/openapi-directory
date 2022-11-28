import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotErrorMessage } from "./snapshoterrormessage";



export class BatchDeleteClusterSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SnapshotErrorMessage })
  errors?: SnapshotErrorMessage[];

  @SpeakeasyMetadata()
  resources?: string[];
}
