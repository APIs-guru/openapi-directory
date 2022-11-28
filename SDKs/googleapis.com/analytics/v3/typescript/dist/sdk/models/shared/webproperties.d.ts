import { SpeakeasyBase } from "../../../internal/utils";
import { Webproperty } from "./webproperty";
/**
 * A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.
**/
export declare class Webproperties extends SpeakeasyBase {
    items?: Webproperty[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
