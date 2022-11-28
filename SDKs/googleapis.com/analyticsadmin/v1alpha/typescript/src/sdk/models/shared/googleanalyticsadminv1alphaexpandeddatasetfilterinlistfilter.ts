import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter
/** 
 * A filter for a string dimension that matches a particular list of options.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
