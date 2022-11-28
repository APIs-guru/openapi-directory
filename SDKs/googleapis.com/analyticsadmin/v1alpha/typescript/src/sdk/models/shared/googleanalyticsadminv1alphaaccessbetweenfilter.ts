import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaNumericValue } from "./googleanalyticsadminv1alphanumericvalue";



// GoogleAnalyticsAdminV1alphaAccessBetweenFilter
/** 
 * To express that the result needs to be between two numbers (inclusive).
**/
export class GoogleAnalyticsAdminV1alphaAccessBetweenFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromValue" })
  fromValue?: GoogleAnalyticsAdminV1alphaNumericValue;

  @SpeakeasyMetadata({ data: "json, name=toValue" })
  toValue?: GoogleAnalyticsAdminV1alphaNumericValue;
}
