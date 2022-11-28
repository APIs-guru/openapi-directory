import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDiskSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSnapshotName" })
  diskSnapshotName: string;
}
