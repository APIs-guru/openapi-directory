import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterbetweenfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterinlistfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterstringfilter";
/**
 * A specific filter for a single dimension or metric.
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter extends SpeakeasyBase {
    atAnyPointInTime?: boolean;
    betweenFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter;
    fieldName?: string;
    inAnyNDayPeriod?: number;
    inListFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter;
    numericFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter;
    stringFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter;
}
