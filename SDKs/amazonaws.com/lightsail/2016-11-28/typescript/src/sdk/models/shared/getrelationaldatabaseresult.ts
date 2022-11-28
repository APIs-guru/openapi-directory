import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabase } from "./relationaldatabase";



export class GetRelationalDatabaseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationalDatabase" })
  relationalDatabase?: RelationalDatabase;
}
