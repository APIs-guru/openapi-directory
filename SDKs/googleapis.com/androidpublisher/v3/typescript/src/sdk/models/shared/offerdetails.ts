import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OfferDetails
/** 
 * Offer details information related to a purchase line item.
**/
export class OfferDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basePlanId" })
  basePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerTags" })
  offerTags?: string[];
}
