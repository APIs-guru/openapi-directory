import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";



export class CreateDatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Database" })
  database?: Database;
}
