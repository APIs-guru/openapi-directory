import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabase } from "./relationaldatabase";



export class GetRelationalDatabasesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=relationalDatabases", elemType: RelationalDatabase })
  relationalDatabases?: RelationalDatabase[];
}
