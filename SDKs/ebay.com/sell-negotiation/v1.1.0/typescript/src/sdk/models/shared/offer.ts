import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { TimeDuration } from "./timeduration";
import { OfferedItem } from "./offereditem";



// Offer
/** 
 * A complex type that defines an offer that a seller makes to eligible buyers.
**/
export class Offer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCounterOffer" })
  allowCounterOffer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=buyer" })
  buyer?: User;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=initiatedBy" })
  initiatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=offerDuration" })
  offerDuration?: TimeDuration;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=offerStatus" })
  offerStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=offerType" })
  offerType?: string;

  @SpeakeasyMetadata({ data: "json, name=offeredItems", elemType: OfferedItem })
  offeredItems?: OfferedItem[];

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;
}
