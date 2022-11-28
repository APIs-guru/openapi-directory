import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSnapshotName" })
  relationalDatabaseSnapshotName: string;
}
