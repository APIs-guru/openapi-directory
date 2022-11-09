import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAccessDateRange } from "./googleanalyticsadminv1alphaaccessdaterange";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpression } from "./googleanalyticsadminv1alphaaccessfilterexpression";
import { GoogleAnalyticsAdminV1alphaAccessDimension } from "./googleanalyticsadminv1alphaaccessdimension";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpression } from "./googleanalyticsadminv1alphaaccessfilterexpression";
import { GoogleAnalyticsAdminV1alphaAccessMetric } from "./googleanalyticsadminv1alphaaccessmetric";
import { GoogleAnalyticsAdminV1alphaAccessOrderBy } from "./googleanalyticsadminv1alphaaccessorderby";


// GoogleAnalyticsAdminV1alphaRunAccessReportRequest
/** 
 * The request for a Data Access Record Report.
**/
export class GoogleAnalyticsAdminV1alphaRunAccessReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateRanges", elemType: shared.GoogleAnalyticsAdminV1alphaAccessDateRange })
  dateRanges?: GoogleAnalyticsAdminV1alphaAccessDateRange[];

  @Metadata({ data: "json, name=dimensionFilter" })
  dimensionFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;

  @Metadata({ data: "json, name=dimensions", elemType: shared.GoogleAnalyticsAdminV1alphaAccessDimension })
  dimensions?: GoogleAnalyticsAdminV1alphaAccessDimension[];

  @Metadata({ data: "json, name=limit" })
  limit?: string;

  @Metadata({ data: "json, name=metricFilter" })
  metricFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;

  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleAnalyticsAdminV1alphaAccessMetric })
  metrics?: GoogleAnalyticsAdminV1alphaAccessMetric[];

  @Metadata({ data: "json, name=offset" })
  offset?: string;

  @Metadata({ data: "json, name=orderBys", elemType: shared.GoogleAnalyticsAdminV1alphaAccessOrderBy })
  orderBys?: GoogleAnalyticsAdminV1alphaAccessOrderBy[];

  @Metadata({ data: "json, name=returnEntityQuota" })
  returnEntityQuota?: boolean;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
