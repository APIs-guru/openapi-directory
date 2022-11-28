import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstanceSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceSnapshotName" })
  instanceSnapshotName: string;
}
