import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue";


// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter
/** 
 * A filter for numeric or date values between certain values on a dimension or metric.
**/
export class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromValue" })
  fromValue?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;

  @Metadata({ data: "json, name=toValue" })
  toValue?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
}
