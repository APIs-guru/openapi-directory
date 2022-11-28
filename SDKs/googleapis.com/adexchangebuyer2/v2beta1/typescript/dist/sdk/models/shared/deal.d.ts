import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateData } from "./privatedata";
import { CreativeRestrictions } from "./creativerestrictions";
import { DealServingMetadata } from "./dealservingmetadata";
import { DealTerms } from "./dealterms";
import { DeliveryControl } from "./deliverycontrol";
import { ContactInformation } from "./contactinformation";
import { MarketplaceTargeting } from "./marketplacetargeting";
import { TargetingCriteria } from "./targetingcriteria";
export declare enum DealCreativePreApprovalPolicyEnum {
    CreativePreApprovalPolicyUnspecified = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
    SellerPreApprovalRequired = "SELLER_PRE_APPROVAL_REQUIRED",
    SellerPreApprovalNotRequired = "SELLER_PRE_APPROVAL_NOT_REQUIRED"
}
export declare enum DealCreativeSafeFrameCompatibilityEnum {
    CreativeSafeFrameCompatibilityUnspecified = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
    Compatible = "COMPATIBLE",
    Incompatible = "INCOMPATIBLE"
}
export declare enum DealProgrammaticCreativeSourceEnum {
    ProgrammaticCreativeSourceUnspecified = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
    Advertiser = "ADVERTISER",
    Publisher = "PUBLISHER"
}
export declare enum DealSyndicationProductEnum {
    SyndicationProductUnspecified = "SYNDICATION_PRODUCT_UNSPECIFIED",
    Content = "CONTENT",
    Mobile = "MOBILE",
    Video = "VIDEO",
    Games = "GAMES"
}
/**
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
export declare class Deal extends SpeakeasyBase {
    availableEndTime?: string;
    availableStartTime?: string;
    buyerPrivateData?: PrivateData;
    createProductId?: string;
    createProductRevision?: string;
    createTime?: string;
    creativePreApprovalPolicy?: DealCreativePreApprovalPolicyEnum;
    creativeRestrictions?: CreativeRestrictions;
    creativeSafeFrameCompatibility?: DealCreativeSafeFrameCompatibilityEnum;
    dealId?: string;
    dealServingMetadata?: DealServingMetadata;
    dealTerms?: DealTerms;
    deliveryControl?: DeliveryControl;
    description?: string;
    displayName?: string;
    externalDealId?: string;
    isSetupComplete?: boolean;
    programmaticCreativeSource?: DealProgrammaticCreativeSourceEnum;
    proposalId?: string;
    sellerContacts?: ContactInformation[];
    syndicationProduct?: DealSyndicationProductEnum;
    targeting?: MarketplaceTargeting;
    targetingCriterion?: TargetingCriteria[];
    updateTime?: string;
    webPropertyCode?: string;
}
/**
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
export declare class DealInput extends SpeakeasyBase {
    availableEndTime?: string;
    availableStartTime?: string;
    buyerPrivateData?: PrivateData;
    createProductId?: string;
    createProductRevision?: string;
    creativeRestrictions?: CreativeRestrictions;
    dealServingMetadata?: DealServingMetadata;
    dealTerms?: DealTerms;
    description?: string;
    displayName?: string;
    syndicationProduct?: DealSyndicationProductEnum;
    targeting?: MarketplaceTargeting;
    targetingCriterion?: TargetingCriteria[];
    webPropertyCode?: string;
}
