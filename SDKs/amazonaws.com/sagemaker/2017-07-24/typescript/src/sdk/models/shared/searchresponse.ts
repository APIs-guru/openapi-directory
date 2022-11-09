import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchRecord } from "./searchrecord";


export class SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Results", elemType: shared.SearchRecord })
  results?: SearchRecord[];
}
