import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlatformSummaryBetterAdsStatusEnum {
    Unknown = "UNKNOWN",
    Passing = "PASSING",
    Warning = "WARNING",
    Failing = "FAILING"
}
export declare enum PlatformSummaryFilterStatusEnum {
    Unknown = "UNKNOWN",
    On = "ON",
    Off = "OFF",
    Paused = "PAUSED",
    Pending = "PENDING"
}
export declare enum PlatformSummaryRegionEnum {
    RegionUnknown = "REGION_UNKNOWN",
    RegionA = "REGION_A",
    RegionB = "REGION_B",
    RegionC = "REGION_C"
}
/**
 * A site's Ad Experience Report summary on a single platform.
**/
export declare class PlatformSummary extends SpeakeasyBase {
    betterAdsStatus?: PlatformSummaryBetterAdsStatusEnum;
    enforcementTime?: string;
    filterStatus?: PlatformSummaryFilterStatusEnum;
    lastChangeTime?: string;
    region?: PlatformSummaryRegionEnum[];
    reportUrl?: string;
    underReview?: boolean;
}
