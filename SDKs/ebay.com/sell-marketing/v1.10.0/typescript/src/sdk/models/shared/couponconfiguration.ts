import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CouponConfiguration
/** 
 * This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.
**/
export class CouponConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=couponCode" })
  couponCode?: string;

  @SpeakeasyMetadata({ data: "json, name=couponType" })
  couponType?: string;

  @SpeakeasyMetadata({ data: "json, name=maxCouponRedemptionPerUser" })
  maxCouponRedemptionPerUser?: number;
}
