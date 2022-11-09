import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=relationalDatabaseSnapshotName" })
  relationalDatabaseSnapshotName: string;
}
