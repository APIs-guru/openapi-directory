import { SpeakeasyBase } from "../../../internal/utils";
import { SearchContentMatch } from "./searchcontentmatch";
import { SearchSegment } from "./searchsegment";
export declare class SearchCodeSearchResult extends SpeakeasyBase {
    contentMatchCount?: number;
    contentMatches?: SearchContentMatch[];
    file?: Map<string, any>;
    pathMatches?: SearchSegment[];
    type?: string;
}
