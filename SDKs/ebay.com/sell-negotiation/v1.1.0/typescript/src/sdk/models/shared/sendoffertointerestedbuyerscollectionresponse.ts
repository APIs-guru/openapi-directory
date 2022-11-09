import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Offer } from "./offer";


// SendOfferToInterestedBuyersCollectionResponse
/** 
 * The response object returned from a SendOfferToInterestedBuyers request.
**/
export class SendOfferToInterestedBuyersCollectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=offers", elemType: shared.Offer })
  offers?: Offer[];
}
