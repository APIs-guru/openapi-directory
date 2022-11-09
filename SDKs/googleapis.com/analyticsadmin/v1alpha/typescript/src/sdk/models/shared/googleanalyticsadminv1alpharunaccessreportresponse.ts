import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAccessDimensionHeader } from "./googleanalyticsadminv1alphaaccessdimensionheader";
import { GoogleAnalyticsAdminV1alphaAccessMetricHeader } from "./googleanalyticsadminv1alphaaccessmetricheader";
import { GoogleAnalyticsAdminV1alphaAccessQuota } from "./googleanalyticsadminv1alphaaccessquota";
import { GoogleAnalyticsAdminV1alphaAccessRow } from "./googleanalyticsadminv1alphaaccessrow";


// GoogleAnalyticsAdminV1alphaRunAccessReportResponse
/** 
 * The customized Data Access Record Report response.
**/
export class GoogleAnalyticsAdminV1alphaRunAccessReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionHeaders", elemType: shared.GoogleAnalyticsAdminV1alphaAccessDimensionHeader })
  dimensionHeaders?: GoogleAnalyticsAdminV1alphaAccessDimensionHeader[];

  @Metadata({ data: "json, name=metricHeaders", elemType: shared.GoogleAnalyticsAdminV1alphaAccessMetricHeader })
  metricHeaders?: GoogleAnalyticsAdminV1alphaAccessMetricHeader[];

  @Metadata({ data: "json, name=quota" })
  quota?: GoogleAnalyticsAdminV1alphaAccessQuota;

  @Metadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @Metadata({ data: "json, name=rows", elemType: shared.GoogleAnalyticsAdminV1alphaAccessRow })
  rows?: GoogleAnalyticsAdminV1alphaAccessRow[];
}
