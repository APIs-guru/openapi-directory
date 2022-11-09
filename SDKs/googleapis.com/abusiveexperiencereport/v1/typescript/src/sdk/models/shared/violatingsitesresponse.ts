import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SiteSummaryResponse } from "./sitesummaryresponse";


// ViolatingSitesResponse
/** 
 * Response message for ListViolatingSites.
**/
export class ViolatingSitesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=violatingSites", elemType: shared.SiteSummaryResponse })
  violatingSites?: SiteSummaryResponse[];
}
