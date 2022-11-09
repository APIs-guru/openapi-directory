import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterbetweenfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterinlistfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterstringfilter";


// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter
/** 
 * A specific filter for a single dimension or metric.
**/
export class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=atAnyPointInTime" })
  atAnyPointInTime?: boolean;

  @Metadata({ data: "json, name=betweenFilter" })
  betweenFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=inAnyNDayPeriod" })
  inAnyNDayPeriod?: number;

  @Metadata({ data: "json, name=inListFilter" })
  inListFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter;

  @Metadata({ data: "json, name=numericFilter" })
  numericFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter;

  @Metadata({ data: "json, name=stringFilter" })
  stringFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter;
}
