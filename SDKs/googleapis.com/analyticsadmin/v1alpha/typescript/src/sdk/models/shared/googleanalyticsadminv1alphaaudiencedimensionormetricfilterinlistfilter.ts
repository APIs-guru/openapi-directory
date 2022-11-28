import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter
/** 
 * A filter for a string dimension that matches a particular list of options.
**/
export class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
