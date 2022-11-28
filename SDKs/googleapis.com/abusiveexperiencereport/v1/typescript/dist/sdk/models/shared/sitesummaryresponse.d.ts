import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SiteSummaryResponseAbusiveStatusEnum {
    Unknown = "UNKNOWN",
    Passing = "PASSING",
    Failing = "FAILING"
}
export declare enum SiteSummaryResponseFilterStatusEnum {
    Unknown = "UNKNOWN",
    On = "ON",
    Off = "OFF",
    Paused = "PAUSED",
    Pending = "PENDING"
}
/**
 * Response message for GetSiteSummary.
**/
export declare class SiteSummaryResponse extends SpeakeasyBase {
    abusiveStatus?: SiteSummaryResponseAbusiveStatusEnum;
    enforcementTime?: string;
    filterStatus?: SiteSummaryResponseFilterStatusEnum;
    lastChangeTime?: string;
    reportUrl?: string;
    reviewedSite?: string;
    underReview?: boolean;
}
