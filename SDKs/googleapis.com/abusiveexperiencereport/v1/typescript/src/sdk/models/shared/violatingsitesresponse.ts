import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SiteSummaryResponse } from "./sitesummaryresponse";



// ViolatingSitesResponse
/** 
 * Response message for ListViolatingSites.
**/
export class ViolatingSitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=violatingSites", elemType: SiteSummaryResponse })
  violatingSites?: SiteSummaryResponse[];
}
