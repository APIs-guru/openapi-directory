import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoCorrections } from "./autocorrections";
import { SearchFacetsResponse } from "./searchfacetsresponse";
import { RelatedSearch } from "./relatedsearch";
import { CreativeVideoSearchItem } from "./creativevideosearchitem";
export declare class CreativeVideoSearchResults extends SpeakeasyBase {
    autoCorrections?: AutoCorrections;
    facets?: SearchFacetsResponse;
    relatedSearches?: RelatedSearch[];
    resultCount?: number;
    videos?: CreativeVideoSearchItem[];
}
