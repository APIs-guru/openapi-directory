import { SpeakeasyBase } from "../../../internal/utils";
import { Coupon } from "./coupon";
import { Image } from "./image";
import { Terms } from "./terms";
/**
 * The result set for the event search.
**/
export declare class Event extends SpeakeasyBase {
    applicableCoupons?: Coupon[];
    description?: string;
    endDate?: string;
    eventAffiliateWebUrl?: string;
    eventId?: string;
    eventWebUrl?: string;
    images?: Image[];
    startDate?: string;
    terms?: Terms;
    title?: string;
}
