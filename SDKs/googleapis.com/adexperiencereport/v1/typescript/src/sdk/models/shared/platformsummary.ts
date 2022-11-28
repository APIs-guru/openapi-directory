import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlatformSummaryBetterAdsStatusEnum {
    Unknown = "UNKNOWN",
    Passing = "PASSING",
    Warning = "WARNING",
    Failing = "FAILING"
}

export enum PlatformSummaryFilterStatusEnum {
    Unknown = "UNKNOWN",
    On = "ON",
    Off = "OFF",
    Paused = "PAUSED",
    Pending = "PENDING"
}

export enum PlatformSummaryRegionEnum {
    RegionUnknown = "REGION_UNKNOWN",
    RegionA = "REGION_A",
    RegionB = "REGION_B",
    RegionC = "REGION_C"
}


// PlatformSummary
/** 
 * A site's Ad Experience Report summary on a single platform.
**/
export class PlatformSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=betterAdsStatus" })
  betterAdsStatus?: PlatformSummaryBetterAdsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=enforcementTime" })
  enforcementTime?: string;

  @SpeakeasyMetadata({ data: "json, name=filterStatus" })
  filterStatus?: PlatformSummaryFilterStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastChangeTime" })
  lastChangeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: PlatformSummaryRegionEnum[];

  @SpeakeasyMetadata({ data: "json, name=reportUrl" })
  reportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=underReview" })
  underReview?: boolean;
}
