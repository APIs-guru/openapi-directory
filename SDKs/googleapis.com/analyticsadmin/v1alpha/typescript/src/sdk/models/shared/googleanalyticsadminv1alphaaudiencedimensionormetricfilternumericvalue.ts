import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue
/** 
 * To represent a number.
**/
export class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=int64Value" })
  int64Value?: string;
}
