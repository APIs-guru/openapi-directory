import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
/**
 * This type defines the fields returned in an ad response.
**/
export declare class AdResponse extends SpeakeasyBase {
    adId?: string;
    errors?: Error[];
    href?: string;
    listingId?: string;
    statusCode?: number;
}
