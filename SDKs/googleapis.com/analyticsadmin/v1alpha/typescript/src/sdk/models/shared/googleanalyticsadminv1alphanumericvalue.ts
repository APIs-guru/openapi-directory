import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaNumericValue
/** 
 * To represent a number.
**/
export class GoogleAnalyticsAdminV1alphaNumericValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=int64Value" })
  int64Value?: string;
}
