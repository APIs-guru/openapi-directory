import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotName" })
  snapshotName: string;
}
