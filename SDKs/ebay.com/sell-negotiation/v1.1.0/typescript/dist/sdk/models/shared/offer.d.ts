import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { TimeDuration } from "./timeduration";
import { OfferedItem } from "./offereditem";
/**
 * A complex type that defines an offer that a seller makes to eligible buyers.
**/
export declare class Offer extends SpeakeasyBase {
    allowCounterOffer?: boolean;
    buyer?: User;
    creationDate?: string;
    initiatedBy?: string;
    lastModifiedDate?: string;
    message?: string;
    offerDuration?: TimeDuration;
    offerId?: string;
    offerStatus?: string;
    offerType?: string;
    offeredItems?: OfferedItem[];
    revision?: string;
}
