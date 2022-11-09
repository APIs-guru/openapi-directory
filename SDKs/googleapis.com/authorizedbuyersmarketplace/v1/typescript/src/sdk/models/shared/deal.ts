import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreativeRequirements } from "./creativerequirements";
import { DeliveryControl } from "./deliverycontrol";
import { Money } from "./money";
import { PreferredDealTerms } from "./preferreddealterms";
import { PrivateAuctionTerms } from "./privateauctionterms";
import { ProgrammaticGuaranteedTerms } from "./programmaticguaranteedterms";
import { TimeZone } from "./timezone";
import { MarketplaceTargeting } from "./marketplacetargeting";

export enum DealDealTypeEnum {
    DealTypeUnspecified = "DEAL_TYPE_UNSPECIFIED"
,    PreferredDeal = "PREFERRED_DEAL"
,    PrivateAuction = "PRIVATE_AUCTION"
,    ProgrammaticGuaranteed = "PROGRAMMATIC_GUARANTEED"
}


// Deal
/** 
 * A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
**/
export class Deal extends SpeakeasyBase {
  @Metadata({ data: "json, name=billedBuyer" })
  billedBuyer?: string;

  @Metadata({ data: "json, name=buyer" })
  buyer?: string;

  @Metadata({ data: "json, name=client" })
  client?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creativeRequirements" })
  creativeRequirements?: CreativeRequirements;

  @Metadata({ data: "json, name=dealType" })
  dealType?: DealDealTypeEnum;

  @Metadata({ data: "json, name=deliveryControl" })
  deliveryControl?: DeliveryControl;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=estimatedGrossSpend" })
  estimatedGrossSpend?: Money;

  @Metadata({ data: "json, name=flightEndTime" })
  flightEndTime?: string;

  @Metadata({ data: "json, name=flightStartTime" })
  flightStartTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=preferredDealTerms" })
  preferredDealTerms?: PreferredDealTerms;

  @Metadata({ data: "json, name=privateAuctionTerms" })
  privateAuctionTerms?: PrivateAuctionTerms;

  @Metadata({ data: "json, name=programmaticGuaranteedTerms" })
  programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;

  @Metadata({ data: "json, name=proposalRevision" })
  proposalRevision?: string;

  @Metadata({ data: "json, name=publisherProfile" })
  publisherProfile?: string;

  @Metadata({ data: "json, name=sellerTimeZone" })
  sellerTimeZone?: TimeZone;

  @Metadata({ data: "json, name=targeting" })
  targeting?: MarketplaceTargeting;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
