import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DiskSnapshot } from "./disksnapshot";


export class GetDiskSnapshotsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSnapshots", elemType: shared.DiskSnapshot })
  diskSnapshots?: DiskSnapshot[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
