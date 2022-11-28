import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue
/** 
 * To represent a number.
**/
export class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=int64Value" })
  int64Value?: string;
}
