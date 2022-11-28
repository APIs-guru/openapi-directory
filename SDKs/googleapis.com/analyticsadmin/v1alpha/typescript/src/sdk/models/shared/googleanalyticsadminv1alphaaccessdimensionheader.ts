import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaAccessDimensionHeader
/** 
 * Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.
**/
export class GoogleAnalyticsAdminV1alphaAccessDimensionHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;
}
