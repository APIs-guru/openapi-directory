import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDiskSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSnapshotName" })
  diskSnapshotName: string;
}
