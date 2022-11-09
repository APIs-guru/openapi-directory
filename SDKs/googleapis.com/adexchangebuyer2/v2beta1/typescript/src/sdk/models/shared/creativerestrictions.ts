import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreativeSpecification } from "./creativespecification";

export enum CreativeRestrictionsCreativeFormatEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED"
,    Display = "DISPLAY"
,    Video = "VIDEO"
}

export enum CreativeRestrictionsSkippableAdTypeEnum {
    SkippableAdTypeUnspecified = "SKIPPABLE_AD_TYPE_UNSPECIFIED"
,    Skippable = "SKIPPABLE"
,    InstreamSelect = "INSTREAM_SELECT"
,    NotSkippable = "NOT_SKIPPABLE"
}


// CreativeRestrictions
/** 
 * Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.
**/
export class CreativeRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeFormat" })
  creativeFormat?: CreativeRestrictionsCreativeFormatEnum;

  @Metadata({ data: "json, name=creativeSpecifications", elemType: shared.CreativeSpecification })
  creativeSpecifications?: CreativeSpecification[];

  @Metadata({ data: "json, name=skippableAdType" })
  skippableAdType?: CreativeRestrictionsSkippableAdTypeEnum;
}
