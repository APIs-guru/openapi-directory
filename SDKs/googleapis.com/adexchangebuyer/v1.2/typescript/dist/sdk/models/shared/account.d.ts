import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AccountBidderLocation extends SpeakeasyBase {
    maximumQps?: number;
    region?: string;
    url?: string;
}
/**
 * Configuration data for an Ad Exchange buyer account.
**/
export declare class Account extends SpeakeasyBase {
    bidderLocation?: AccountBidderLocation[];
    cookieMatchingNid?: string;
    cookieMatchingUrl?: string;
    id?: number;
    kind?: string;
    maximumActiveCreatives?: number;
    maximumTotalQps?: number;
    numberActiveCreatives?: number;
}
