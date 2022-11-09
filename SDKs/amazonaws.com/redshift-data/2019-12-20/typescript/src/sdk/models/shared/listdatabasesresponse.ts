import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDatabasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Databases" })
  databases?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
