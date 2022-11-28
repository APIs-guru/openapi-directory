import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
/**
 * This type defines the fields returned in a delete-ad response.
**/
export declare class DeleteAdResponse extends SpeakeasyBase {
    adId?: string;
    errors?: Error[];
    listingId?: string;
    statusCode?: number;
}
