import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRelationalDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=finalRelationalDatabaseSnapshotName" })
  finalRelationalDatabaseSnapshotName?: string;

  @Metadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @Metadata({ data: "json, name=skipFinalSnapshot" })
  skipFinalSnapshot?: boolean;
}
