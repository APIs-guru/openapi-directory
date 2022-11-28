import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpressionlist";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilter";
/**
 * A logical expression of EnhancedDataSet dimension filters.
**/
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression extends SpeakeasyBase {
    andGroup?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList;
    filter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilter;
    notExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
}
