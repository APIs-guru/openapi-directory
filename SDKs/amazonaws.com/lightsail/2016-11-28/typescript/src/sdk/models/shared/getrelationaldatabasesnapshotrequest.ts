import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSnapshotName" })
  relationalDatabaseSnapshotName: string;
}
