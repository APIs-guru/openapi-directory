import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaFirebaseLink } from "./googleanalyticsadminv1alphafirebaselink";


// GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
/** 
 * Response message for ListFirebaseLinks RPC
**/
export class GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=firebaseLinks", elemType: shared.GoogleAnalyticsAdminV1alphaFirebaseLink })
  firebaseLinks?: GoogleAnalyticsAdminV1alphaFirebaseLink[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
