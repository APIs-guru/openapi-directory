import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeSpecification } from "./creativespecification";


export enum CreativeRestrictionsCreativeFormatEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Display = "DISPLAY",
    Video = "VIDEO"
}

export enum CreativeRestrictionsSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED",
    Skippable = "SKIPPABLE",
    InstreamSelect = "INSTREAM_SELECT",
    NotSkippable = "NOT_SKIPPABLE"
}


// CreativeRestrictions
/** 
 * Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
**/
export class CreativeRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeFormat" })
  creativeFormat?: CreativeRestrictionsCreativeFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=creativeSpecifications", elemType: CreativeSpecification })
  creativeSpecifications?: CreativeSpecification[];

  @SpeakeasyMetadata({ data: "json, name=skippableAdType" })
  skippableAdType?: CreativeRestrictionsSkippableAdTypeEnum;
}
