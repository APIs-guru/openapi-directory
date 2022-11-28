import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreativeCorrections extends SpeakeasyBase {
    details?: string[];
    reason?: string;
}
export declare class CreativeDisapprovalReasons extends SpeakeasyBase {
    details?: string[];
    reason?: string;
}
export declare class CreativeFilteringReasonsReasons extends SpeakeasyBase {
    filteringCount?: string;
    filteringStatus?: number;
}
/**
 * The filtering reasons for the creative. Read-only. This field should not be set in requests.
**/
export declare class CreativeFilteringReasons extends SpeakeasyBase {
    date?: string;
    reasons?: CreativeFilteringReasonsReasons[];
}
/**
 * A creative and its classification data.
**/
export declare class Creative extends SpeakeasyBase {
    htmlSnippet?: string;
    accountId?: number;
    advertiserId?: string[];
    advertiserName?: string;
    agencyId?: string;
    apiUploadTimestamp?: Date;
    attribute?: number[];
    buyerCreativeId?: string;
    clickThroughUrl?: string[];
    corrections?: CreativeCorrections[];
    disapprovalReasons?: CreativeDisapprovalReasons[];
    filteringReasons?: CreativeFilteringReasons;
    height?: number;
    impressionTrackingUrl?: string[];
    kind?: string;
    productCategories?: number[];
    restrictedCategories?: number[];
    sensitiveCategories?: number[];
    status?: string;
    vendorType?: number[];
    version?: number;
    videoUrl?: string;
    width?: number;
}
