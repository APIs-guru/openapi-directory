import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RelationalDatabase } from "./relationaldatabase";


export class GetRelationalDatabaseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=relationalDatabase" })
  relationalDatabase?: RelationalDatabase;
}
