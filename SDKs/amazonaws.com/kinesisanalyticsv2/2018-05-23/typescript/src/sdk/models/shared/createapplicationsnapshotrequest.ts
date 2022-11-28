import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateApplicationSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotName" })
  snapshotName: string;
}
