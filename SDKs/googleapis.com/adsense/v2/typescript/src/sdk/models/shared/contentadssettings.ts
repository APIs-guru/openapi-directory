import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ContentAdsSettingsTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Display = "DISPLAY"
,    Feed = "FEED"
,    Article = "ARTICLE"
,    MatchedContent = "MATCHED_CONTENT"
,    Link = "LINK"
}


// ContentAdsSettings
/** 
 * Settings specific to content ads (AFC).
**/
export class ContentAdsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=type" })
  type?: ContentAdsSettingsTypeEnum;
}
