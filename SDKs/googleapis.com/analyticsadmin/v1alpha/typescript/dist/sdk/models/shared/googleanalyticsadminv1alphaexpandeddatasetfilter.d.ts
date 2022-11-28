import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilterinlistfilter";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilterstringfilter";
/**
 * A specific filter for a single dimension
**/
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSetFilter extends SpeakeasyBase {
    fieldName?: string;
    inListFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter;
    stringFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter;
}
