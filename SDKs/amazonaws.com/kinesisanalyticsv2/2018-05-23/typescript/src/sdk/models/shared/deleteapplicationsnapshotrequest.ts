import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApplicationSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=SnapshotCreationTimestamp" })
  snapshotCreationTimestamp: Date;

  @Metadata({ data: "json, name=SnapshotName" })
  snapshotName: string;
}
