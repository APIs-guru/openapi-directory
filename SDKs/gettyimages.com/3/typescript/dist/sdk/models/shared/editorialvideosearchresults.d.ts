import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchFacetsResponse } from "./searchfacetsresponse";
import { RelatedSearch } from "./relatedsearch";
import { EditorialVideoSearchItem } from "./editorialvideosearchitem";
export declare class EditorialVideoSearchResults extends SpeakeasyBase {
    facets?: SearchFacetsResponse;
    relatedSearches?: RelatedSearch[];
    resultCount?: number;
    videos?: EditorialVideoSearchItem[];
}
