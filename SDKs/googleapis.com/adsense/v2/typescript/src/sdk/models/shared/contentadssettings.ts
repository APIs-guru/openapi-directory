import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContentAdsSettingsTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Display = "DISPLAY",
    Feed = "FEED",
    Article = "ARTICLE",
    MatchedContent = "MATCHED_CONTENT",
    Link = "LINK"
}


// ContentAdsSettings
/** 
 * Settings specific to content ads (AFC).
**/
export class ContentAdsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ContentAdsSettingsTypeEnum;
}
