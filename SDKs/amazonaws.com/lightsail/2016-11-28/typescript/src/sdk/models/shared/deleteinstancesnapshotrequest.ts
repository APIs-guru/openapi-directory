import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInstanceSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceSnapshotName" })
  instanceSnapshotName: string;
}
