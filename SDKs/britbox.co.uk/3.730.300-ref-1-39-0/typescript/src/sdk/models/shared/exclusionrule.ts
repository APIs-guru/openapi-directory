import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExclusionRuleExcludeDeliveryEnum {
    Stream = "Stream"
,    Download = "Download"
,    StreamOrDownload = "StreamOrDownload"
,    ProgressiveDownload = "ProgressiveDownload"
,    None = "None"
}

export enum ExclusionRuleExcludeMinResolutionEnum {
    Sd = "SD"
,    Hd720 = "HD-720"
,    Hd1080 = "HD-1080"
,    Hd4K = "HD-4K"
,    External = "External"
,    Unknown = "Unknown"
}


// ExclusionRule
/** 
 * Defines playback exclusion rules for an Offer or Entitlement.
**/
export class ExclusionRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device?: string;

  @Metadata({ data: "json, name=excludeAirplay" })
  excludeAirplay?: boolean;

  @Metadata({ data: "json, name=excludeChromecast" })
  excludeChromecast?: boolean;

  @Metadata({ data: "json, name=excludeDelivery" })
  excludeDelivery?: ExclusionRuleExcludeDeliveryEnum;

  @Metadata({ data: "json, name=excludeMinResolution" })
  excludeMinResolution?: ExclusionRuleExcludeMinResolutionEnum;
}
