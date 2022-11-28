import { SpeakeasyBase } from "../../../internal/utils";
import { AutoCorrections } from "./autocorrections";
import { ImageSearchItemCreative } from "./imagesearchitemcreative";
import { RelatedSearch } from "./relatedsearch";
export declare class CreativeImageSearchResults extends SpeakeasyBase {
    autoCorrections?: AutoCorrections;
    images?: ImageSearchItemCreative[];
    relatedSearches?: RelatedSearch[];
    resultCount?: number;
}
