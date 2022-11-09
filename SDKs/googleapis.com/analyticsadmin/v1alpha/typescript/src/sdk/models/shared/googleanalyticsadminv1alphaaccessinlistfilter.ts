import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaAccessInListFilter
/** 
 * The result needs to be in a list of string values.
**/
export class GoogleAnalyticsAdminV1alphaAccessInListFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
