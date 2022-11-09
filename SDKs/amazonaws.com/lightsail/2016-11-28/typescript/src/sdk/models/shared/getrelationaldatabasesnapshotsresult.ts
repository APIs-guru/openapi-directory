import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelationalDatabaseSnapshot } from "./relationaldatabasesnapshot";


export class GetRelationalDatabaseSnapshotsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=relationalDatabaseSnapshots", elemType: shared.RelationalDatabaseSnapshot })
  relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[];
}
