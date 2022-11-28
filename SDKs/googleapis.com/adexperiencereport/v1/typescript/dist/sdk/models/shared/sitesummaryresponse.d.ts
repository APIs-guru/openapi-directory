import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformSummary } from "./platformsummary";
/**
 * Response message for GetSiteSummary.
**/
export declare class SiteSummaryResponse extends SpeakeasyBase {
    desktopSummary?: PlatformSummary;
    mobileSummary?: PlatformSummary;
    reviewedSite?: string;
}
