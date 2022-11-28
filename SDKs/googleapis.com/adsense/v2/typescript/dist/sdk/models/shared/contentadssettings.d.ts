import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ContentAdsSettingsTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Display = "DISPLAY",
    Feed = "FEED",
    Article = "ARTICLE",
    MatchedContent = "MATCHED_CONTENT",
    Link = "LINK"
}
/**
 * Settings specific to content ads (AFC).
**/
export declare class ContentAdsSettings extends SpeakeasyBase {
    size?: string;
    type?: ContentAdsSettingsTypeEnum;
}
