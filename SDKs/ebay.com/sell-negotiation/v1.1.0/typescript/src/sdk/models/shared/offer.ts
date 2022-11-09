import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";
import { TimeDuration } from "./timeduration";
import { OfferedItem } from "./offereditem";


// Offer
/** 
 * A complex type that defines an offer that a seller makes to eligible buyers.
**/
export class Offer extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCounterOffer" })
  allowCounterOffer?: boolean;

  @Metadata({ data: "json, name=buyer" })
  buyer?: User;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=initiatedBy" })
  initiatedBy?: string;

  @Metadata({ data: "json, name=lastModifiedDate" })
  lastModifiedDate?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=offerDuration" })
  offerDuration?: TimeDuration;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=offerStatus" })
  offerStatus?: string;

  @Metadata({ data: "json, name=offerType" })
  offerType?: string;

  @Metadata({ data: "json, name=offeredItems", elemType: shared.OfferedItem })
  offeredItems?: OfferedItem[];

  @Metadata({ data: "json, name=revision" })
  revision?: string;
}
