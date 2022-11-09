import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SearchMatchModeEnum {
    Literal = "literal",
    Regexp = "regexp"
}
export declare class SearchQueryParams extends SpeakeasyBase {
    matchMode?: SearchMatchModeEnum;
    query: string;
}
export declare class SearchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SearchRequest extends SpeakeasyBase {
    queryParams: SearchQueryParams;
    security: SearchSecurity;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    searchResults?: shared.SearchResult[];
    statusCode: number;
}
