import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCustomMetric } from "./googleanalyticsadminv1alphacustommetric";



// GoogleAnalyticsAdminV1alphaListCustomMetricsResponse
/** 
 * Response message for ListCustomMetrics RPC.
**/
export class GoogleAnalyticsAdminV1alphaListCustomMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customMetrics", elemType: GoogleAnalyticsAdminV1alphaCustomMetric })
  customMetrics?: GoogleAnalyticsAdminV1alphaCustomMetric[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
