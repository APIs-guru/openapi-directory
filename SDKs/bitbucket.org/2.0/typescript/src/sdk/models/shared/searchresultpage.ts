import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchCodeSearchResult } from "./searchcodesearchresult";



export class SearchResultPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pagelen" })
  pagelen?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=query_substituted" })
  querySubstituted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: SearchCodeSearchResult })
  values?: SearchCodeSearchResult[];
}
