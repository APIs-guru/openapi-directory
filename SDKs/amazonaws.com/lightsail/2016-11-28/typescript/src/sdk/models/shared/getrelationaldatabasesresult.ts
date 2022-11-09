import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelationalDatabase } from "./relationaldatabase";


export class GetRelationalDatabasesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=relationalDatabases", elemType: shared.RelationalDatabase })
  relationalDatabases?: RelationalDatabase[];
}
