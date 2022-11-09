import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DiskSnapshot } from "./disksnapshot";


export class GetDiskSnapshotResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSnapshot" })
  diskSnapshot?: DiskSnapshot;
}
