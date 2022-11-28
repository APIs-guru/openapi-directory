import { SpeakeasyBase } from "../../../internal/utils";
import { AutoCorrections } from "./autocorrections";
import { SearchFacetsResponse } from "./searchfacetsresponse";
import { RelatedSearch } from "./relatedsearch";
export declare class SearchByImageResourceResults extends SpeakeasyBase {
    autoCorrections?: AutoCorrections;
    facets?: SearchFacetsResponse;
    imageFingerprint?: string;
    images?: any;
    relatedSearches?: RelatedSearch[];
    resultCount?: number;
}
