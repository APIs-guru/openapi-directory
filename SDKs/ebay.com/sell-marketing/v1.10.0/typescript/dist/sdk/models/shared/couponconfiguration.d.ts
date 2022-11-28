import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.
**/
export declare class CouponConfiguration extends SpeakeasyBase {
    couponCode?: string;
    couponType?: string;
    maxCouponRedemptionPerUser?: number;
}
