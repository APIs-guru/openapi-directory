import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaProperty } from "./googleanalyticsadminv1alphaproperty";



// GoogleAnalyticsAdminV1alphaListPropertiesResponse
/** 
 * Response message for ListProperties RPC.
**/
export class GoogleAnalyticsAdminV1alphaListPropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleAnalyticsAdminV1alphaProperty })
  properties?: GoogleAnalyticsAdminV1alphaProperty[];
}
