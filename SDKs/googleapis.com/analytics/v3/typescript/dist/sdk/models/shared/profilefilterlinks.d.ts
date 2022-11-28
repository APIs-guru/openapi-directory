import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileFilterLink } from "./profilefilterlink";
/**
 * A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.
**/
export declare class ProfileFilterLinks extends SpeakeasyBase {
    items?: ProfileFilterLink[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
