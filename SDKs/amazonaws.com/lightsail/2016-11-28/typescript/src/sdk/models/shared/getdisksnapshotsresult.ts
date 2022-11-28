import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskSnapshot } from "./disksnapshot";



export class GetDiskSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSnapshots", elemType: DiskSnapshot })
  diskSnapshots?: DiskSnapshot[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
