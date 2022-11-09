import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter
/** 
 * A filter for a string dimension that matches a particular list of options.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
