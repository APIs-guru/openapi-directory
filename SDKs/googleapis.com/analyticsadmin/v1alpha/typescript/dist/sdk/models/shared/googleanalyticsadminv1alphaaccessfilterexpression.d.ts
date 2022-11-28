import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessFilter } from "./googleanalyticsadminv1alphaaccessfilter";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpressionList } from "./googleanalyticsadminv1alphaaccessfilterexpressionlist";
/**
 * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
**/
export declare class GoogleAnalyticsAdminV1alphaAccessFilterExpression extends SpeakeasyBase {
    accessFilter?: GoogleAnalyticsAdminV1alphaAccessFilter;
    andGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
    notExpression?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;
    orGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
}
