import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessBetweenFilter } from "./googleanalyticsadminv1alphaaccessbetweenfilter";
import { GoogleAnalyticsAdminV1alphaAccessInListFilter } from "./googleanalyticsadminv1alphaaccessinlistfilter";
import { GoogleAnalyticsAdminV1alphaAccessNumericFilter } from "./googleanalyticsadminv1alphaaccessnumericfilter";
import { GoogleAnalyticsAdminV1alphaAccessStringFilter } from "./googleanalyticsadminv1alphaaccessstringfilter";



// GoogleAnalyticsAdminV1alphaAccessFilter
/** 
 * An expression to filter dimension or metric values.
**/
export class GoogleAnalyticsAdminV1alphaAccessFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=betweenFilter" })
  betweenFilter?: GoogleAnalyticsAdminV1alphaAccessBetweenFilter;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=inListFilter" })
  inListFilter?: GoogleAnalyticsAdminV1alphaAccessInListFilter;

  @SpeakeasyMetadata({ data: "json, name=numericFilter" })
  numericFilter?: GoogleAnalyticsAdminV1alphaAccessNumericFilter;

  @SpeakeasyMetadata({ data: "json, name=stringFilter" })
  stringFilter?: GoogleAnalyticsAdminV1alphaAccessStringFilter;
}
