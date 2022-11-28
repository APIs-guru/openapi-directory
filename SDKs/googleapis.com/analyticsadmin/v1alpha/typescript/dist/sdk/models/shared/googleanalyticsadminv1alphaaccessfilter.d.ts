import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessBetweenFilter } from "./googleanalyticsadminv1alphaaccessbetweenfilter";
import { GoogleAnalyticsAdminV1alphaAccessInListFilter } from "./googleanalyticsadminv1alphaaccessinlistfilter";
import { GoogleAnalyticsAdminV1alphaAccessNumericFilter } from "./googleanalyticsadminv1alphaaccessnumericfilter";
import { GoogleAnalyticsAdminV1alphaAccessStringFilter } from "./googleanalyticsadminv1alphaaccessstringfilter";
/**
 * An expression to filter dimension or metric values.
**/
export declare class GoogleAnalyticsAdminV1alphaAccessFilter extends SpeakeasyBase {
    betweenFilter?: GoogleAnalyticsAdminV1alphaAccessBetweenFilter;
    fieldName?: string;
    inListFilter?: GoogleAnalyticsAdminV1alphaAccessInListFilter;
    numericFilter?: GoogleAnalyticsAdminV1alphaAccessNumericFilter;
    stringFilter?: GoogleAnalyticsAdminV1alphaAccessStringFilter;
}
