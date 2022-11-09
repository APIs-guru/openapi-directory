import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaAccessBetweenFilter } from "./googleanalyticsadminv1alphaaccessbetweenfilter";
import { GoogleAnalyticsAdminV1alphaAccessInListFilter } from "./googleanalyticsadminv1alphaaccessinlistfilter";
import { GoogleAnalyticsAdminV1alphaAccessNumericFilter } from "./googleanalyticsadminv1alphaaccessnumericfilter";
import { GoogleAnalyticsAdminV1alphaAccessStringFilter } from "./googleanalyticsadminv1alphaaccessstringfilter";


// GoogleAnalyticsAdminV1alphaAccessFilter
/** 
 * An expression to filter dimension or metric values.
**/
export class GoogleAnalyticsAdminV1alphaAccessFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=betweenFilter" })
  betweenFilter?: GoogleAnalyticsAdminV1alphaAccessBetweenFilter;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=inListFilter" })
  inListFilter?: GoogleAnalyticsAdminV1alphaAccessInListFilter;

  @Metadata({ data: "json, name=numericFilter" })
  numericFilter?: GoogleAnalyticsAdminV1alphaAccessNumericFilter;

  @Metadata({ data: "json, name=stringFilter" })
  stringFilter?: GoogleAnalyticsAdminV1alphaAccessStringFilter;
}
