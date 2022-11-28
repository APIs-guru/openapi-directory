import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExclusionRuleExcludeDeliveryEnum {
    Stream = "Stream",
    Download = "Download",
    StreamOrDownload = "StreamOrDownload",
    ProgressiveDownload = "ProgressiveDownload",
    None = "None"
}
export declare enum ExclusionRuleExcludeMinResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}
/**
 * Defines playback exclusion rules for an Offer or Entitlement.
**/
export declare class ExclusionRule extends SpeakeasyBase {
    description?: string;
    device?: string;
    excludeAirplay?: boolean;
    excludeChromecast?: boolean;
    excludeDelivery?: ExclusionRuleExcludeDeliveryEnum;
    excludeMinResolution?: ExclusionRuleExcludeMinResolutionEnum;
}
