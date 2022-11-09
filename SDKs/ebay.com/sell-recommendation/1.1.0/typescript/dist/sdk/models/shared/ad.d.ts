import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BidPercentages } from "./bidpercentages";
/**
 * A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.
**/
export declare class Ad extends SpeakeasyBase {
    bidPercentages?: BidPercentages[];
    promoteWithAd?: string;
}
