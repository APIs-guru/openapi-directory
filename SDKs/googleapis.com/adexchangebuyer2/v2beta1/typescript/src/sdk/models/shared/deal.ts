import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrivateData } from "./privatedata";
import { CreativeRestrictions } from "./creativerestrictions";
import { DealServingMetadata } from "./dealservingmetadata";
import { DealTerms } from "./dealterms";
import { DeliveryControl } from "./deliverycontrol";
import { ContactInformation } from "./contactinformation";
import { MarketplaceTargeting } from "./marketplacetargeting";
import { TargetingCriteria } from "./targetingcriteria";

export enum DealCreativePreApprovalPolicyEnum {
    CreativePreApprovalPolicyUnspecified = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED"
,    SellerPreApprovalRequired = "SELLER_PRE_APPROVAL_REQUIRED"
,    SellerPreApprovalNotRequired = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
}

export enum DealCreativeSafeFrameCompatibilityEnum {
    CreativeSafeFrameCompatibilityUnspecified = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED"
,    Compatible = "COMPATIBLE"
,    Incompatible = "INCOMPATIBLE"
}

export enum DealProgrammaticCreativeSourceEnum {
    ProgrammaticCreativeSourceUnspecified = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED"
,    Advertiser = "ADVERTISER"
,    Publisher = "PUBLISHER"
}

export enum DealSyndicationProductEnum {
    SyndicationProductUnspecified = "SYNDICATION_PRODUCT_UNSPECIFIED"
,    Content = "CONTENT"
,    Mobile = "MOBILE"
,    Video = "VIDEO"
,    Games = "GAMES"
}


// Deal
/** 
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
export class Deal extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableEndTime" })
  availableEndTime?: string;

  @Metadata({ data: "json, name=availableStartTime" })
  availableStartTime?: string;

  @Metadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @Metadata({ data: "json, name=createProductId" })
  createProductId?: string;

  @Metadata({ data: "json, name=createProductRevision" })
  createProductRevision?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creativePreApprovalPolicy" })
  creativePreApprovalPolicy?: DealCreativePreApprovalPolicyEnum;

  @Metadata({ data: "json, name=creativeRestrictions" })
  creativeRestrictions?: CreativeRestrictions;

  @Metadata({ data: "json, name=creativeSafeFrameCompatibility" })
  creativeSafeFrameCompatibility?: DealCreativeSafeFrameCompatibilityEnum;

  @Metadata({ data: "json, name=dealId" })
  dealId?: string;

  @Metadata({ data: "json, name=dealServingMetadata" })
  dealServingMetadata?: DealServingMetadata;

  @Metadata({ data: "json, name=dealTerms" })
  dealTerms?: DealTerms;

  @Metadata({ data: "json, name=deliveryControl" })
  deliveryControl?: DeliveryControl;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=externalDealId" })
  externalDealId?: string;

  @Metadata({ data: "json, name=isSetupComplete" })
  isSetupComplete?: boolean;

  @Metadata({ data: "json, name=programmaticCreativeSource" })
  programmaticCreativeSource?: DealProgrammaticCreativeSourceEnum;

  @Metadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @Metadata({ data: "json, name=sellerContacts", elemType: shared.ContactInformation })
  sellerContacts?: ContactInformation[];

  @Metadata({ data: "json, name=syndicationProduct" })
  syndicationProduct?: DealSyndicationProductEnum;

  @Metadata({ data: "json, name=targeting" })
  targeting?: MarketplaceTargeting;

  @Metadata({ data: "json, name=targetingCriterion", elemType: shared.TargetingCriteria })
  targetingCriterion?: TargetingCriteria[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}
