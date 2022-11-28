import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseSnapshot } from "./relationaldatabasesnapshot";



export class GetRelationalDatabaseSnapshotResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationalDatabaseSnapshot" })
  relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
}
