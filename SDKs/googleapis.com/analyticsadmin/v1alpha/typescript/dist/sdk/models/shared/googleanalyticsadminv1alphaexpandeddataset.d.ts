import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpression";
/**
 * A resource message representing a GA4 ExpandedDataSet.
**/
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSet extends SpeakeasyBase {
    dataCollectionStartTime?: string;
    description?: string;
    dimensionFilterExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
    dimensionNames?: string[];
    displayName?: string;
    metricNames?: string[];
    name?: string;
}
