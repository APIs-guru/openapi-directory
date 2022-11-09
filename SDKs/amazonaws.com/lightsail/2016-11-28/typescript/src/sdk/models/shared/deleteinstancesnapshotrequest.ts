import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInstanceSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceSnapshotName" })
  instanceSnapshotName: string;
}
