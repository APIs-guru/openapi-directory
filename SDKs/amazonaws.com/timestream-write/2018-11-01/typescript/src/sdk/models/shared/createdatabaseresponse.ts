import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Database } from "./database";


export class CreateDatabaseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Database" })
  database?: Database;
}
