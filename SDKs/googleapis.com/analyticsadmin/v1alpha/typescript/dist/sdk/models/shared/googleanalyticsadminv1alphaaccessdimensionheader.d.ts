import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.
**/
export declare class GoogleAnalyticsAdminV1alphaAccessDimensionHeader extends SpeakeasyBase {
    dimensionName?: string;
}
