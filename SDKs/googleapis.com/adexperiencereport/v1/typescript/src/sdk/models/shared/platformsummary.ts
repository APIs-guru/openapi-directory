import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlatformSummaryBetterAdsStatusEnum {
    Unknown = "UNKNOWN"
,    Passing = "PASSING"
,    Warning = "WARNING"
,    Failing = "FAILING"
}

export enum PlatformSummaryFilterStatusEnum {
    Unknown = "UNKNOWN"
,    On = "ON"
,    Off = "OFF"
,    Paused = "PAUSED"
,    Pending = "PENDING"
}

export enum PlatformSummaryRegionEnum {
    RegionUnknown = "REGION_UNKNOWN"
,    RegionA = "REGION_A"
,    RegionB = "REGION_B"
,    RegionC = "REGION_C"
}


// PlatformSummary
/** 
 * A site's Ad Experience Report summary on a single platform.
**/
export class PlatformSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=betterAdsStatus" })
  betterAdsStatus?: PlatformSummaryBetterAdsStatusEnum;

  @Metadata({ data: "json, name=enforcementTime" })
  enforcementTime?: string;

  @Metadata({ data: "json, name=filterStatus" })
  filterStatus?: PlatformSummaryFilterStatusEnum;

  @Metadata({ data: "json, name=lastChangeTime" })
  lastChangeTime?: string;

  @Metadata({ data: "json, name=region" })
  region?: PlatformSummaryRegionEnum[];

  @Metadata({ data: "json, name=reportUrl" })
  reportUrl?: string;

  @Metadata({ data: "json, name=underReview" })
  underReview?: boolean;
}
