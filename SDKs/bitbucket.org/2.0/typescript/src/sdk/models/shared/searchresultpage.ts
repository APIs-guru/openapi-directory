import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchCodeSearchResult } from "./searchcodesearchresult";


export class SearchResultPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pagelen" })
  pagelen?: number;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=query_substituted" })
  querySubstituted?: boolean;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=values", elemType: shared.SearchCodeSearchResult })
  values?: SearchCodeSearchResult[];
}
