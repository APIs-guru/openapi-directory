import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaggedTable } from "./taggedtable";



export class SearchTablesByLfTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TableList", elemType: TaggedTable })
  tableList?: TaggedTable[];
}
