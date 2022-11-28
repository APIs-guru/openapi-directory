import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaFirebaseLink } from "./googleanalyticsadminv1alphafirebaselink";
/**
 * Response message for ListFirebaseLinks RPC
**/
export declare class GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse extends SpeakeasyBase {
    firebaseLinks?: GoogleAnalyticsAdminV1alphaFirebaseLink[];
    nextPageToken?: string;
}
