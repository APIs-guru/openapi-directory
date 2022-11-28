import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Coupon } from "./coupon";
import { Image } from "./image";
import { Terms } from "./terms";



// Event
/** 
 * The result set for the event search.
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicableCoupons", elemType: Coupon })
  applicableCoupons?: Coupon[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=eventAffiliateWebUrl" })
  eventAffiliateWebUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventWebUrl" })
  eventWebUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: Image })
  images?: Image[];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: Terms;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
