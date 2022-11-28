import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { PreferredDealTerms } from "./preferreddealterms";
import { PrivateAuctionTermsInput } from "./privateauctionterms";
import { ProgrammaticGuaranteedTerms } from "./programmaticguaranteedterms";
import { TimeZone } from "./timezone";
import { MarketplaceTargeting } from "./marketplacetargeting";
import { CreativeRequirements } from "./creativerequirements";
import { DeliveryControl } from "./deliverycontrol";
import { PrivateAuctionTerms } from "./privateauctionterms";


export enum DealDealTypeEnum {
    DealTypeUnspecified = "DEAL_TYPE_UNSPECIFIED",
    PreferredDeal = "PREFERRED_DEAL",
    PrivateAuction = "PRIVATE_AUCTION",
    ProgrammaticGuaranteed = "PROGRAMMATIC_GUARANTEED"
}


// DealInput
/** 
 * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
**/
export class DealInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedGrossSpend" })
  estimatedGrossSpend?: Money;

  @SpeakeasyMetadata({ data: "json, name=flightEndTime" })
  flightEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=flightStartTime" })
  flightStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredDealTerms" })
  preferredDealTerms?: PreferredDealTerms;

  @SpeakeasyMetadata({ data: "json, name=privateAuctionTerms" })
  privateAuctionTerms?: PrivateAuctionTermsInput;

  @SpeakeasyMetadata({ data: "json, name=programmaticGuaranteedTerms" })
  programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;

  @SpeakeasyMetadata({ data: "json, name=publisherProfile" })
  publisherProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerTimeZone" })
  sellerTimeZone?: TimeZone;

  @SpeakeasyMetadata({ data: "json, name=targeting" })
  targeting?: MarketplaceTargeting;
}


// Deal
/** 
 * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
**/
export class Deal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billedBuyer" })
  billedBuyer?: string;

  @SpeakeasyMetadata({ data: "json, name=buyer" })
  buyer?: string;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeRequirements" })
  creativeRequirements?: CreativeRequirements;

  @SpeakeasyMetadata({ data: "json, name=dealType" })
  dealType?: DealDealTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=deliveryControl" })
  deliveryControl?: DeliveryControl;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedGrossSpend" })
  estimatedGrossSpend?: Money;

  @SpeakeasyMetadata({ data: "json, name=flightEndTime" })
  flightEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=flightStartTime" })
  flightStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=preferredDealTerms" })
  preferredDealTerms?: PreferredDealTerms;

  @SpeakeasyMetadata({ data: "json, name=privateAuctionTerms" })
  privateAuctionTerms?: PrivateAuctionTerms;

  @SpeakeasyMetadata({ data: "json, name=programmaticGuaranteedTerms" })
  programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;

  @SpeakeasyMetadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherProfile" })
  publisherProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerTimeZone" })
  sellerTimeZone?: TimeZone;

  @SpeakeasyMetadata({ data: "json, name=targeting" })
  targeting?: MarketplaceTargeting;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
