import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaCustomMetric } from "./googleanalyticsadminv1alphacustommetric";


// GoogleAnalyticsAdminV1alphaListCustomMetricsResponse
/** 
 * Response message for ListCustomMetrics RPC.
**/
export class GoogleAnalyticsAdminV1alphaListCustomMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customMetrics", elemType: shared.GoogleAnalyticsAdminV1alphaCustomMetric })
  customMetrics?: GoogleAnalyticsAdminV1alphaCustomMetric[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
