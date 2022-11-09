import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlatformSummary } from "./platformsummary";
import { PlatformSummary } from "./platformsummary";


// SiteSummaryResponse
/** 
 * Response message for GetSiteSummary.
**/
export class SiteSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=desktopSummary" })
  desktopSummary?: PlatformSummary;

  @Metadata({ data: "json, name=mobileSummary" })
  mobileSummary?: PlatformSummary;

  @Metadata({ data: "json, name=reviewedSite" })
  reviewedSite?: string;
}
