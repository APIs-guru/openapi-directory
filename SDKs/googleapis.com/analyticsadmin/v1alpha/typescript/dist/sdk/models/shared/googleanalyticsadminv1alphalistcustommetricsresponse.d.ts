import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCustomMetric } from "./googleanalyticsadminv1alphacustommetric";
/**
 * Response message for ListCustomMetrics RPC.
**/
export declare class GoogleAnalyticsAdminV1alphaListCustomMetricsResponse extends SpeakeasyBase {
    customMetrics?: GoogleAnalyticsAdminV1alphaCustomMetric[];
    nextPageToken?: string;
}
