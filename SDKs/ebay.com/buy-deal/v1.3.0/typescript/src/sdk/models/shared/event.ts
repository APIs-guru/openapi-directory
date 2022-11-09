import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Coupon } from "./coupon";
import { Image } from "./image";
import { Terms } from "./terms";


// Event
/** 
 * The result set for the event search.
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicableCoupons", elemType: shared.Coupon })
  applicableCoupons?: Coupon[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=eventAffiliateWebUrl" })
  eventAffiliateWebUrl?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=eventWebUrl" })
  eventWebUrl?: string;

  @Metadata({ data: "json, name=images", elemType: shared.Image })
  images?: Image[];

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=terms" })
  terms?: Terms;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
