import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessDimensionHeader } from "./googleanalyticsadminv1alphaaccessdimensionheader";
import { GoogleAnalyticsAdminV1alphaAccessMetricHeader } from "./googleanalyticsadminv1alphaaccessmetricheader";
import { GoogleAnalyticsAdminV1alphaAccessQuota } from "./googleanalyticsadminv1alphaaccessquota";
import { GoogleAnalyticsAdminV1alphaAccessRow } from "./googleanalyticsadminv1alphaaccessrow";
/**
 * The customized Data Access Record Report response.
**/
export declare class GoogleAnalyticsAdminV1alphaRunAccessReportResponse extends SpeakeasyBase {
    dimensionHeaders?: GoogleAnalyticsAdminV1alphaAccessDimensionHeader[];
    metricHeaders?: GoogleAnalyticsAdminV1alphaAccessMetricHeader[];
    quota?: GoogleAnalyticsAdminV1alphaAccessQuota;
    rowCount?: number;
    rows?: GoogleAnalyticsAdminV1alphaAccessRow[];
}
