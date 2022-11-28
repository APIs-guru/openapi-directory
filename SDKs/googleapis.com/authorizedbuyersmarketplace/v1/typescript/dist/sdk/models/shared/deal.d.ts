import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { PreferredDealTerms } from "./preferreddealterms";
import { PrivateAuctionTermsInput } from "./privateauctionterms";
import { ProgrammaticGuaranteedTerms } from "./programmaticguaranteedterms";
import { TimeZone } from "./timezone";
import { MarketplaceTargeting } from "./marketplacetargeting";
import { CreativeRequirements } from "./creativerequirements";
import { DeliveryControl } from "./deliverycontrol";
import { PrivateAuctionTerms } from "./privateauctionterms";
export declare enum DealDealTypeEnum {
    DealTypeUnspecified = "DEAL_TYPE_UNSPECIFIED",
    PreferredDeal = "PREFERRED_DEAL",
    PrivateAuction = "PRIVATE_AUCTION",
    ProgrammaticGuaranteed = "PROGRAMMATIC_GUARANTEED"
}
/**
 * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
**/
export declare class DealInput extends SpeakeasyBase {
    estimatedGrossSpend?: Money;
    flightEndTime?: string;
    flightStartTime?: string;
    name?: string;
    preferredDealTerms?: PreferredDealTerms;
    privateAuctionTerms?: PrivateAuctionTermsInput;
    programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;
    publisherProfile?: string;
    sellerTimeZone?: TimeZone;
    targeting?: MarketplaceTargeting;
}
/**
 * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
**/
export declare class Deal extends SpeakeasyBase {
    billedBuyer?: string;
    buyer?: string;
    client?: string;
    createTime?: string;
    creativeRequirements?: CreativeRequirements;
    dealType?: DealDealTypeEnum;
    deliveryControl?: DeliveryControl;
    description?: string;
    displayName?: string;
    estimatedGrossSpend?: Money;
    flightEndTime?: string;
    flightStartTime?: string;
    name?: string;
    preferredDealTerms?: PreferredDealTerms;
    privateAuctionTerms?: PrivateAuctionTerms;
    programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;
    proposalRevision?: string;
    publisherProfile?: string;
    sellerTimeZone?: TimeZone;
    targeting?: MarketplaceTargeting;
    updateTime?: string;
}
