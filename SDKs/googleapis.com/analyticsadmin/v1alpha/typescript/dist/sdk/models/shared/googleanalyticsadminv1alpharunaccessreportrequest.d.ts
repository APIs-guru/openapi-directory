import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessDateRange } from "./googleanalyticsadminv1alphaaccessdaterange";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpression } from "./googleanalyticsadminv1alphaaccessfilterexpression";
import { GoogleAnalyticsAdminV1alphaAccessDimension } from "./googleanalyticsadminv1alphaaccessdimension";
import { GoogleAnalyticsAdminV1alphaAccessMetric } from "./googleanalyticsadminv1alphaaccessmetric";
import { GoogleAnalyticsAdminV1alphaAccessOrderBy } from "./googleanalyticsadminv1alphaaccessorderby";
/**
 * The request for a Data Access Record Report.
**/
export declare class GoogleAnalyticsAdminV1alphaRunAccessReportRequest extends SpeakeasyBase {
    dateRanges?: GoogleAnalyticsAdminV1alphaAccessDateRange[];
    dimensionFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;
    dimensions?: GoogleAnalyticsAdminV1alphaAccessDimension[];
    limit?: string;
    metricFilter?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;
    metrics?: GoogleAnalyticsAdminV1alphaAccessMetric[];
    offset?: string;
    orderBys?: GoogleAnalyticsAdminV1alphaAccessOrderBy[];
    returnEntityQuota?: boolean;
    timeZone?: string;
}
