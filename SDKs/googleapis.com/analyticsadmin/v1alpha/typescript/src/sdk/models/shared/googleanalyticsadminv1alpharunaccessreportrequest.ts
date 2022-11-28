import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessDateRange } from "./googleanalyticsadminv1alphaaccessdaterange";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpression } from "./googleanalyticsadminv1alphaaccessfilterexpression";
import { GoogleAnalyticsAdminV1alphaAccessDimension } from "./googleanalyticsadminv1alphaaccessdimension";
import { GoogleAnalyticsAdminV1alphaAccessMetric } from "./googleanalyticsadminv1alphaaccessmetric";
import { GoogleAnalyticsAdminV1alphaAccessOrderBy } from "./googleanalyticsadminv1alphaaccessorderby";



// GoogleAnalyticsAdminV1alphaRunAccessReportRequest
/** 
 * The request for a Data Access Record Report.
**/
export class GoogleAnalyticsAdminV1alphaRunAccessReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateRanges", elemType: GoogleAnalyticsAdminV1alphaAccessDateRange })
  dateRanges?: GoogleAnalyticsAdminV1alphaAccessDateRange[];

  @SpeakeasyMetadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GoogleAnalyticsAdminV1alphaAccessDimension })
  dimensions?: GoogleAnalyticsAdminV1alphaAccessDimension[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=metricFilter" })
  metricFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleAnalyticsAdminV1alphaAccessMetric })
  metrics?: GoogleAnalyticsAdminV1alphaAccessMetric[];

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "json, name=orderBys", elemType: GoogleAnalyticsAdminV1alphaAccessOrderBy })
  orderBys?: GoogleAnalyticsAdminV1alphaAccessOrderBy[];

  @SpeakeasyMetadata({ data: "json, name=returnEntityQuota" })
  returnEntityQuota?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
