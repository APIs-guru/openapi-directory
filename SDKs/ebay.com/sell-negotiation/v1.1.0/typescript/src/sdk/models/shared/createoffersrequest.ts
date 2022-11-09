import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeDuration } from "./timeduration";
import { OfferedItem } from "./offereditem";


// CreateOffersRequest
/** 
 * This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller.
**/
export class CreateOffersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCounterOffer" })
  allowCounterOffer?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=offerDuration" })
  offerDuration?: TimeDuration;

  @Metadata({ data: "json, name=offeredItems", elemType: shared.OfferedItem })
  offeredItems?: OfferedItem[];
}
