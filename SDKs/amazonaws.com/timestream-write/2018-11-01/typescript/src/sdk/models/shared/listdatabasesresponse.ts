import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";



export class ListDatabasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Databases", elemType: Database })
  databases?: Database[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
