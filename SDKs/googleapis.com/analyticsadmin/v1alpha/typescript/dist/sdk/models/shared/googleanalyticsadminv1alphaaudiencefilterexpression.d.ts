import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList } from "./googleanalyticsadminv1alphaaudiencefilterexpressionlist";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilter";
import { GoogleAnalyticsAdminV1alphaAudienceEventFilter } from "./googleanalyticsadminv1alphaaudienceeventfilter";
/**
 * A logical expression of Audience dimension, metric, or event filters.
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceFilterExpression extends SpeakeasyBase {
    andGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
    dimensionOrMetricFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter;
    eventFilter?: GoogleAnalyticsAdminV1alphaAudienceEventFilter;
    notExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;
    orGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
}
