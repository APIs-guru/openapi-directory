import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSearchItem } from "./imagesearchitem";
import { RelatedSearch } from "./relatedsearch";
export declare class ImageSearchItemSearchResults extends SpeakeasyBase {
    images?: ImageSearchItem[];
    relatedSearches?: RelatedSearch[];
    resultCount?: number;
}
