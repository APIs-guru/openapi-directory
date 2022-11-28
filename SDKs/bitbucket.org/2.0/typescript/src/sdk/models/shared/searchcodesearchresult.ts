import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchContentMatch } from "./searchcontentmatch";
import { SearchSegment } from "./searchsegment";



export class SearchCodeSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_match_count" })
  contentMatchCount?: number;

  @SpeakeasyMetadata({ data: "json, name=content_matches", elemType: SearchContentMatch })
  contentMatches?: SearchContentMatch[];

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=path_matches", elemType: SearchSegment })
  pathMatches?: SearchSegment[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
