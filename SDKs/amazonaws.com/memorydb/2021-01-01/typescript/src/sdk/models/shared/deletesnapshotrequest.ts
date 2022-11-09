import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotName" })
  snapshotName: string;
}
