import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlatformSummary } from "./platformsummary";



// SiteSummaryResponse
/** 
 * Response message for GetSiteSummary.
**/
export class SiteSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desktopSummary" })
  desktopSummary?: PlatformSummary;

  @SpeakeasyMetadata({ data: "json, name=mobileSummary" })
  mobileSummary?: PlatformSummary;

  @SpeakeasyMetadata({ data: "json, name=reviewedSite" })
  reviewedSite?: string;
}
