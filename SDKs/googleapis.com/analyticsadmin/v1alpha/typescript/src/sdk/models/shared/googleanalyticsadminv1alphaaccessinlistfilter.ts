import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaAccessInListFilter
/** 
 * The result needs to be in a list of string values.
**/
export class GoogleAnalyticsAdminV1alphaAccessInListFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
