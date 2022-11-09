import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeDuration } from "./timeduration";
import { OfferedItem } from "./offereditem";
/**
 * This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller.
**/
export declare class CreateOffersRequest extends SpeakeasyBase {
    allowCounterOffer?: boolean;
    message?: string;
    offerDuration?: TimeDuration;
    offeredItems?: OfferedItem[];
}
