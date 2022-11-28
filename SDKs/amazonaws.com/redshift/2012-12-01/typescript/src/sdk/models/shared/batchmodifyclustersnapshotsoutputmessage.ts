import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotErrorMessage } from "./snapshoterrormessage";



export class BatchModifyClusterSnapshotsOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SnapshotErrorMessage })
  errors?: SnapshotErrorMessage[];

  @SpeakeasyMetadata()
  resources?: string[];
}
