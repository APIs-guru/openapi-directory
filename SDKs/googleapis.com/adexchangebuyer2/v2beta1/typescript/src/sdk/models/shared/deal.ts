import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateData } from "./privatedata";
import { CreativeRestrictions } from "./creativerestrictions";
import { DealServingMetadata } from "./dealservingmetadata";
import { DealTerms } from "./dealterms";
import { DeliveryControl } from "./deliverycontrol";
import { ContactInformation } from "./contactinformation";
import { MarketplaceTargeting } from "./marketplacetargeting";
import { TargetingCriteria } from "./targetingcriteria";


export enum DealCreativePreApprovalPolicyEnum {
    CreativePreApprovalPolicyUnspecified = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
    SellerPreApprovalRequired = "SELLER_PRE_APPROVAL_REQUIRED",
    SellerPreApprovalNotRequired = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
}

export enum DealCreativeSafeFrameCompatibilityEnum {
    CreativeSafeFrameCompatibilityUnspecified = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}

export enum DealProgrammaticCreativeSourceEnum {
    ProgrammaticCreativeSourceUnspecified = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
    Advertiser = "ADVERTISER",
    Publisher = "PUBLISHER"
}

export enum DealSyndicationProductEnum {
    SyndicationProductUnspecified = "SYNDICATION_PRODUCT_UNSPECIFIED",
    Content = "CONTENT",
    Mobile = "MOBILE",
    Video = "VIDEO",
    Games = "GAMES"
}


// Deal
/** 
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
export class Deal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableEndTime" })
  availableEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=availableStartTime" })
  availableStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @SpeakeasyMetadata({ data: "json, name=createProductId" })
  createProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=createProductRevision" })
  createProductRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creativePreApprovalPolicy" })
  creativePreApprovalPolicy?: DealCreativePreApprovalPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=creativeRestrictions" })
  creativeRestrictions?: CreativeRestrictions;

  @SpeakeasyMetadata({ data: "json, name=creativeSafeFrameCompatibility" })
  creativeSafeFrameCompatibility?: DealCreativeSafeFrameCompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=dealId" })
  dealId?: string;

  @SpeakeasyMetadata({ data: "json, name=dealServingMetadata" })
  dealServingMetadata?: DealServingMetadata;

  @SpeakeasyMetadata({ data: "json, name=dealTerms" })
  dealTerms?: DealTerms;

  @SpeakeasyMetadata({ data: "json, name=deliveryControl" })
  deliveryControl?: DeliveryControl;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=externalDealId" })
  externalDealId?: string;

  @SpeakeasyMetadata({ data: "json, name=isSetupComplete" })
  isSetupComplete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=programmaticCreativeSource" })
  programmaticCreativeSource?: DealProgrammaticCreativeSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=proposalId" })
  proposalId?: string;

  @SpeakeasyMetadata({ data: "json, name=sellerContacts", elemType: ContactInformation })
  sellerContacts?: ContactInformation[];

  @SpeakeasyMetadata({ data: "json, name=syndicationProduct" })
  syndicationProduct?: DealSyndicationProductEnum;

  @SpeakeasyMetadata({ data: "json, name=targeting" })
  targeting?: MarketplaceTargeting;

  @SpeakeasyMetadata({ data: "json, name=targetingCriterion", elemType: TargetingCriteria })
  targetingCriterion?: TargetingCriteria[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}


// DealInput
/** 
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
export class DealInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableEndTime" })
  availableEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=availableStartTime" })
  availableStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=buyerPrivateData" })
  buyerPrivateData?: PrivateData;

  @SpeakeasyMetadata({ data: "json, name=createProductId" })
  createProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=createProductRevision" })
  createProductRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeRestrictions" })
  creativeRestrictions?: CreativeRestrictions;

  @SpeakeasyMetadata({ data: "json, name=dealServingMetadata" })
  dealServingMetadata?: DealServingMetadata;

  @SpeakeasyMetadata({ data: "json, name=dealTerms" })
  dealTerms?: DealTerms;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=syndicationProduct" })
  syndicationProduct?: DealSyndicationProductEnum;

  @SpeakeasyMetadata({ data: "json, name=targeting" })
  targeting?: MarketplaceTargeting;

  @SpeakeasyMetadata({ data: "json, name=targetingCriterion", elemType: TargetingCriteria })
  targetingCriterion?: TargetingCriteria[];

  @SpeakeasyMetadata({ data: "json, name=webPropertyCode" })
  webPropertyCode?: string;
}
