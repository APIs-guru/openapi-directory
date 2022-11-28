import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSearchItemEditorial } from "./imagesearchitemeditorial";
import { RelatedSearch } from "./relatedsearch";
export declare class EditorialImageSearchResults extends SpeakeasyBase {
    images?: ImageSearchItemEditorial[];
    relatedSearches?: RelatedSearch[];
    resultCount?: number;
}
