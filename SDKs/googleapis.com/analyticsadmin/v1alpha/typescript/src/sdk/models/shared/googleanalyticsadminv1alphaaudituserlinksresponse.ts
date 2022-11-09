import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAuditUserLink } from "./googleanalyticsadminv1alphaaudituserlink";


// GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
/** 
 * Response message for AuditUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaAuditUserLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=userLinks", elemType: shared.GoogleAnalyticsAdminV1alphaAuditUserLink })
  userLinks?: GoogleAnalyticsAdminV1alphaAuditUserLink[];
}
