import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRelationalDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finalRelationalDatabaseSnapshotName" })
  finalRelationalDatabaseSnapshotName?: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @SpeakeasyMetadata({ data: "json, name=skipFinalSnapshot" })
  skipFinalSnapshot?: boolean;
}
