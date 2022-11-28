import { SpeakeasyBase } from "../../../internal/utils";
import { Listing } from "./listing";
/**
 * Response listing all localized listings.
**/
export declare class ListingsListResponse extends SpeakeasyBase {
    kind?: string;
    listings?: Listing[];
}
