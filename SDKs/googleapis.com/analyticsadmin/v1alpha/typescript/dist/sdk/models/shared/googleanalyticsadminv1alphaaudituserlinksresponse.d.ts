import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAuditUserLink } from "./googleanalyticsadminv1alphaaudituserlink";
/**
 * Response message for AuditUserLinks RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaAuditUserLinksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    userLinks?: GoogleAnalyticsAdminV1alphaAuditUserLink[];
}
