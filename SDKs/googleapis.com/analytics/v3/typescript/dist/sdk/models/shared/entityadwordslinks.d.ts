import { SpeakeasyBase } from "../../../internal/utils";
import { EntityAdWordsLink } from "./entityadwordslink";
/**
 * An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.
**/
export declare class EntityAdWordsLinks extends SpeakeasyBase {
    items?: EntityAdWordsLink[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
}
