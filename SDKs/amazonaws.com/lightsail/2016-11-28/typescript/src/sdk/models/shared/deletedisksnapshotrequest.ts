import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDiskSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSnapshotName" })
  diskSnapshotName: string;
}
