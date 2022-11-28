import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaProperty } from "./googleanalyticsadminv1alphaproperty";
/**
 * Response message for ListProperties RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListPropertiesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    properties?: GoogleAnalyticsAdminV1alphaProperty[];
}
