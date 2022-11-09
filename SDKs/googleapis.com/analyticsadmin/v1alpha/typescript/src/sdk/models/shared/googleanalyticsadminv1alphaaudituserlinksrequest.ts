import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaAuditUserLinksRequest
/** 
 * Request message for AuditUserLinks RPC.
**/
export class GoogleAnalyticsAdminV1alphaAuditUserLinksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
