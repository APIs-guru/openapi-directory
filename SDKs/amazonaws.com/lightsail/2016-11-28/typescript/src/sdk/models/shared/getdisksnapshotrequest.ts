import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDiskSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSnapshotName" })
  diskSnapshotName: string;
}
