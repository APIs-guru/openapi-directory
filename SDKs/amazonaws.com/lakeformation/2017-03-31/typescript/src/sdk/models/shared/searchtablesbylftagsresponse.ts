import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TaggedTable } from "./taggedtable";


export class SearchTablesByLfTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TableList", elemType: shared.TaggedTable })
  tableList?: TaggedTable[];
}
