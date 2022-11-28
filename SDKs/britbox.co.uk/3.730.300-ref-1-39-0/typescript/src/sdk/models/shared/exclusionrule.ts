import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExclusionRuleExcludeDeliveryEnum {
    Stream = "Stream",
    Download = "Download",
    StreamOrDownload = "StreamOrDownload",
    ProgressiveDownload = "ProgressiveDownload",
    None = "None"
}

export enum ExclusionRuleExcludeMinResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}


// ExclusionRule
/** 
 * Defines playback exclusion rules for an Offer or Entitlement.
**/
export class ExclusionRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=excludeAirplay" })
  excludeAirplay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludeChromecast" })
  excludeChromecast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludeDelivery" })
  excludeDelivery?: ExclusionRuleExcludeDeliveryEnum;

  @SpeakeasyMetadata({ data: "json, name=excludeMinResolution" })
  excludeMinResolution?: ExclusionRuleExcludeMinResolutionEnum;
}
