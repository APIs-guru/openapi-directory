import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchResultTextMatches } from "./searchresulttextmatches";



// LabelSearchResultItem
/** 
 * Label Search Result Item
**/
export class LabelSearchResultItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color: string;

  @SpeakeasyMetadata({ data: "json, name=default" })
  default: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;

  @SpeakeasyMetadata({ data: "json, name=text_matches", elemType: SearchResultTextMatches })
  textMatches?: SearchResultTextMatches[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
