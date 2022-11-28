import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration data for an Ad Exchange direct deal.
**/
export declare class DirectDeal extends SpeakeasyBase {
    accountId?: number;
    advertiser?: string;
    allowsAlcohol?: boolean;
    buyerAccountId?: string;
    currencyCode?: string;
    dealTier?: string;
    endTime?: string;
    fixedCpm?: string;
    id?: string;
    kind?: string;
    name?: string;
    privateExchangeMinCpm?: string;
    publisherBlocksOverriden?: boolean;
    sellerNetwork?: string;
    startTime?: string;
}
