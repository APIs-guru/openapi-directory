import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy } from "./googleanalyticsadminv1alphaaccessorderbydimensionorderby";
import { GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy } from "./googleanalyticsadminv1alphaaccessorderbymetricorderby";
/**
 * Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering.
**/
export declare class GoogleAnalyticsAdminV1alphaAccessOrderBy extends SpeakeasyBase {
    desc?: boolean;
    dimension?: GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy;
    metric?: GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy;
}
