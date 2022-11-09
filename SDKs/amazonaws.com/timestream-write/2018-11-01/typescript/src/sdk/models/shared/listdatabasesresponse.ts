import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Database } from "./database";


export class ListDatabasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Databases", elemType: shared.Database })
  databases?: Database[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
