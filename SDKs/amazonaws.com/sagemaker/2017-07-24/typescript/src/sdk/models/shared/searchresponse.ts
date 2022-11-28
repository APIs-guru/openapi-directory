import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchRecord } from "./searchrecord";



export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Results", elemType: SearchRecord })
  results?: SearchRecord[];
}
