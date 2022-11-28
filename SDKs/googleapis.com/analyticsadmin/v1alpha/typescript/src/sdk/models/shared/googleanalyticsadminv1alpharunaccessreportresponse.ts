import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessDimensionHeader } from "./googleanalyticsadminv1alphaaccessdimensionheader";
import { GoogleAnalyticsAdminV1alphaAccessMetricHeader } from "./googleanalyticsadminv1alphaaccessmetricheader";
import { GoogleAnalyticsAdminV1alphaAccessQuota } from "./googleanalyticsadminv1alphaaccessquota";
import { GoogleAnalyticsAdminV1alphaAccessRow } from "./googleanalyticsadminv1alphaaccessrow";



// GoogleAnalyticsAdminV1alphaRunAccessReportResponse
/** 
 * The customized Data Access Record Report response.
**/
export class GoogleAnalyticsAdminV1alphaRunAccessReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionHeaders", elemType: GoogleAnalyticsAdminV1alphaAccessDimensionHeader })
  dimensionHeaders?: GoogleAnalyticsAdminV1alphaAccessDimensionHeader[];

  @SpeakeasyMetadata({ data: "json, name=metricHeaders", elemType: GoogleAnalyticsAdminV1alphaAccessMetricHeader })
  metricHeaders?: GoogleAnalyticsAdminV1alphaAccessMetricHeader[];

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: GoogleAnalyticsAdminV1alphaAccessQuota;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: GoogleAnalyticsAdminV1alphaAccessRow })
  rows?: GoogleAnalyticsAdminV1alphaAccessRow[];
}
