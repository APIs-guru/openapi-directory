import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AdClientStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    GettingReady = "GETTING_READY",
    RequiresReview = "REQUIRES_REVIEW"
}
/**
 * Representation of an ad client. An ad client represents a user's subscription with a specific AdSense product.
**/
export declare class AdClient extends SpeakeasyBase {
    name?: string;
    productCode?: string;
    reportingDimensionId?: string;
    state?: AdClientStateEnum;
}
