import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudience } from "./googleanalyticsadminv1alphaaudience";



// GoogleAnalyticsAdminV1alphaListAudiencesResponse
/** 
 * Response message for ListAudiences RPC.
**/
export class GoogleAnalyticsAdminV1alphaListAudiencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audiences", elemType: GoogleAnalyticsAdminV1alphaAudience })
  audiences?: GoogleAnalyticsAdminV1alphaAudience[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
