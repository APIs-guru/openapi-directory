import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRestoreStatus } from "./tablerestorestatus";



export class RestoreTableFromClusterSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  tableRestoreStatus?: TableRestoreStatus;
}
