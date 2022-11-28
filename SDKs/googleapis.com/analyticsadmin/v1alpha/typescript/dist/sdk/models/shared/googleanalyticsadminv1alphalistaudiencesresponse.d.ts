import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudience } from "./googleanalyticsadminv1alphaaudience";
/**
 * Response message for ListAudiences RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListAudiencesResponse extends SpeakeasyBase {
    audiences?: GoogleAnalyticsAdminV1alphaAudience[];
    nextPageToken?: string;
}
