import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericvalue";



// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter
/** 
 * A filter for numeric or date values between certain values on a dimension or metric.
**/
export class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromValue" })
  fromValue?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;

  @SpeakeasyMetadata({ data: "json, name=toValue" })
  toValue?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue;
}
