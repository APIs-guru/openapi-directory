import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseBlueprint } from "./relationaldatabaseblueprint";



export class GetRelationalDatabaseBlueprintsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blueprints", elemType: RelationalDatabaseBlueprint })
  blueprints?: RelationalDatabaseBlueprint[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
