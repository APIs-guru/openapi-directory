import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAudience } from "./googleanalyticsadminv1alphaaudience";


// GoogleAnalyticsAdminV1alphaListAudiencesResponse
/** 
 * Response message for ListAudiences RPC.
**/
export class GoogleAnalyticsAdminV1alphaListAudiencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=audiences", elemType: shared.GoogleAnalyticsAdminV1alphaAudience })
  audiences?: GoogleAnalyticsAdminV1alphaAudience[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
