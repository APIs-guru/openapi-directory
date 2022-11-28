import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessDimensionValue } from "./googleanalyticsadminv1alphaaccessdimensionvalue";
import { GoogleAnalyticsAdminV1alphaAccessMetricValue } from "./googleanalyticsadminv1alphaaccessmetricvalue";
/**
 * Access report data for each row.
**/
export declare class GoogleAnalyticsAdminV1alphaAccessRow extends SpeakeasyBase {
    dimensionValues?: GoogleAnalyticsAdminV1alphaAccessDimensionValue[];
    metricValues?: GoogleAnalyticsAdminV1alphaAccessMetricValue[];
}
