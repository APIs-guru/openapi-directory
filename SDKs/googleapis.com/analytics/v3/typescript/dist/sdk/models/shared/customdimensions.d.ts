import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDimension } from "./customdimension";
/**
 * A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension.
**/
export declare class CustomDimensions extends SpeakeasyBase {
    items?: CustomDimension[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
