import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchContentMatch } from "./searchcontentmatch";
import { SearchSegment } from "./searchsegment";


export class SearchCodeSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_match_count" })
  contentMatchCount?: number;

  @Metadata({ data: "json, name=content_matches", elemType: shared.SearchContentMatch })
  contentMatches?: SearchContentMatch[];

  @Metadata({ data: "json, name=file" })
  file?: Map<string, any>;

  @Metadata({ data: "json, name=path_matches", elemType: shared.SearchSegment })
  pathMatches?: SearchSegment[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
