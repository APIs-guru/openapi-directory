import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeSpecification } from "./creativespecification";
export declare enum CreativeRestrictionsCreativeFormatEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Display = "DISPLAY",
    Video = "VIDEO"
}
export declare enum CreativeRestrictionsSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED",
    Skippable = "SKIPPABLE",
    InstreamSelect = "INSTREAM_SELECT",
    NotSkippable = "NOT_SKIPPABLE"
}
/**
 * Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
**/
export declare class CreativeRestrictions extends SpeakeasyBase {
    creativeFormat?: CreativeRestrictionsCreativeFormatEnum;
    creativeSpecifications?: CreativeSpecification[];
    skippableAdType?: CreativeRestrictionsSkippableAdTypeEnum;
}
