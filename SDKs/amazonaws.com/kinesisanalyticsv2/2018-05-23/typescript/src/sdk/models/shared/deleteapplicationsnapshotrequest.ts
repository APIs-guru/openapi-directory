import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApplicationSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotCreationTimestamp" })
  snapshotCreationTimestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=SnapshotName" })
  snapshotName: string;
}
