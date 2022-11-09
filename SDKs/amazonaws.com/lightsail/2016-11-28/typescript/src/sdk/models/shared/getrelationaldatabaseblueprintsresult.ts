import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelationalDatabaseBlueprint } from "./relationaldatabaseblueprint";


export class GetRelationalDatabaseBlueprintsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=blueprints", elemType: shared.RelationalDatabaseBlueprint })
  blueprints?: RelationalDatabaseBlueprint[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
