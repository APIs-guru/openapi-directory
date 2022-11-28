import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaFirebaseLink } from "./googleanalyticsadminv1alphafirebaselink";



// GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
/** 
 * Response message for ListFirebaseLinks RPC
**/
export class GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firebaseLinks", elemType: GoogleAnalyticsAdminV1alphaFirebaseLink })
  firebaseLinks?: GoogleAnalyticsAdminV1alphaFirebaseLink[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
