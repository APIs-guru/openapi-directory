import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseSnapshot } from "./relationaldatabasesnapshot";



export class GetRelationalDatabaseSnapshotsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSnapshots", elemType: RelationalDatabaseSnapshot })
  relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[];
}
