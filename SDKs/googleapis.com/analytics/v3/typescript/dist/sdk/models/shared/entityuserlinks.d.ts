import { SpeakeasyBase } from "../../../internal/utils";
import { EntityUserLink } from "./entityuserlink";
/**
 * An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
**/
export declare class EntityUserLinks extends SpeakeasyBase {
    items?: EntityUserLink[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
}
