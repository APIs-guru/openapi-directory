import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeDuration } from "./timeduration";
import { OfferedItem } from "./offereditem";



// CreateOffersRequest
/** 
 * This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller.
**/
export class CreateOffersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCounterOffer" })
  allowCounterOffer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=offerDuration" })
  offerDuration?: TimeDuration;

  @SpeakeasyMetadata({ data: "json, name=offeredItems", elemType: OfferedItem })
  offeredItems?: OfferedItem[];
}
