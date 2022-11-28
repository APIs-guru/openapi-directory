import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Offer } from "./offer";



// SendOfferToInterestedBuyersCollectionResponse
/** 
 * The response object returned from a SendOfferToInterestedBuyers request.
**/
export class SendOfferToInterestedBuyersCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offers", elemType: Offer })
  offers?: Offer[];
}
