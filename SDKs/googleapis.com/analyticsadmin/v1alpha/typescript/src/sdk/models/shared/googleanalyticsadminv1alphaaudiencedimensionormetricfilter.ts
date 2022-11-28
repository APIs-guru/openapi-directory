import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterbetweenfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterinlistfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterstringfilter";



// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter
/** 
 * A specific filter for a single dimension or metric.
**/
export class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=atAnyPointInTime" })
  atAnyPointInTime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=betweenFilter" })
  betweenFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=inAnyNDayPeriod" })
  inAnyNDayPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=inListFilter" })
  inListFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter;

  @SpeakeasyMetadata({ data: "json, name=numericFilter" })
  numericFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter;

  @SpeakeasyMetadata({ data: "json, name=stringFilter" })
  stringFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter;
}
