import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaProperty } from "./googleanalyticsadminv1alphaproperty";


// GoogleAnalyticsAdminV1alphaListPropertiesResponse
/** 
 * Response message for ListProperties RPC.
**/
export class GoogleAnalyticsAdminV1alphaListPropertiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.GoogleAnalyticsAdminV1alphaProperty })
  properties?: GoogleAnalyticsAdminV1alphaProperty[];
}
