import { SpeakeasyBase } from "../../../internal/utils";
import { RateLimit } from "./ratelimit";
export declare class RateLimitOverviewResources extends SpeakeasyBase {
    codeScanningUpload?: RateLimit;
    core: RateLimit;
    graphql?: RateLimit;
    integrationManifest?: RateLimit;
    search: RateLimit;
    sourceImport?: RateLimit;
}
/**
 * Rate Limit Overview
**/
export declare class RateLimitOverview extends SpeakeasyBase {
    rate: RateLimit;
    resources: RateLimitOverviewResources;
}
