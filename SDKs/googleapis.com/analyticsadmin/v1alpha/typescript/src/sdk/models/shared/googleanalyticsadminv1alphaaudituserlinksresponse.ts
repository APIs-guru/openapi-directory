import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAuditUserLink } from "./googleanalyticsadminv1alphaaudituserlink";



// GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
/** 
 * Response message for AuditUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaAuditUserLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=userLinks", elemType: GoogleAnalyticsAdminV1alphaAuditUserLink })
  userLinks?: GoogleAnalyticsAdminV1alphaAuditUserLink[];
}
