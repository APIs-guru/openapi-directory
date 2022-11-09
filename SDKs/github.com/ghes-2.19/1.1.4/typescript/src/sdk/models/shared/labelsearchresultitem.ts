import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchResultTextMatches } from "./searchresulttextmatches";


// LabelSearchResultItem
/** 
 * Label Search Result Item
**/
export class LabelSearchResultItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color: string;

  @Metadata({ data: "json, name=default" })
  default: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=score" })
  score: number;

  @Metadata({ data: "json, name=text_matches", elemType: shared.SearchResultTextMatches })
  textMatches?: SearchResultTextMatches[];

  @Metadata({ data: "json, name=url" })
  url: string;
}
