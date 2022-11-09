import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CouponConfiguration
/** 
 * This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.
**/
export class CouponConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=couponCode" })
  couponCode?: string;

  @Metadata({ data: "json, name=couponType" })
  couponType?: string;

  @Metadata({ data: "json, name=maxCouponRedemptionPerUser" })
  maxCouponRedemptionPerUser?: number;
}
