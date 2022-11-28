import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SiteStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    RequiresReview = "REQUIRES_REVIEW",
    GettingReady = "GETTING_READY",
    Ready = "READY",
    NeedsAttention = "NEEDS_ATTENTION"
}
/**
 * Representation of a Site.
**/
export declare class Site extends SpeakeasyBase {
    autoAdsEnabled?: boolean;
    domain?: string;
    name?: string;
    reportingDimensionId?: string;
    state?: SiteStateEnum;
}
