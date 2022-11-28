import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchIncludeEnum {
    Tv = "tv",
    Movies = "movies",
    People = "people",
    Other = "other"
}
export declare class SearchQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    group?: boolean;
    include?: SearchIncludeEnum[];
    lang?: string;
    maxRating?: string;
    maxResults?: number;
    segments?: string[];
    sub?: string;
    term: string;
}
export declare class SearchRequest extends SpeakeasyBase {
    queryParams: SearchQueryParams;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    searchResults?: shared.SearchResults;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
