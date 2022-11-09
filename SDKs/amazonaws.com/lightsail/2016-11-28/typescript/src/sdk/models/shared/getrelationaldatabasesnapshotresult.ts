import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelationalDatabaseSnapshot } from "./relationaldatabasesnapshot";


export class GetRelationalDatabaseSnapshotResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=relationalDatabaseSnapshot" })
  relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
}
