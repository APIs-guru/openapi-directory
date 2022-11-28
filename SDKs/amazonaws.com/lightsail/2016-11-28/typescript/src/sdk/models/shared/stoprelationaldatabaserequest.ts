import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopRelationalDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseName" })
  relationalDatabaseName: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSnapshotName" })
  relationalDatabaseSnapshotName?: string;
}
