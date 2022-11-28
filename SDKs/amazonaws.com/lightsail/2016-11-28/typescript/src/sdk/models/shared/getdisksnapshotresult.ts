import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskSnapshot } from "./disksnapshot";



export class GetDiskSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSnapshot" })
  diskSnapshot?: DiskSnapshot;
}
