import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaNumericValue } from "./googleanalyticsadminv1alphanumericvalue";
import { GoogleAnalyticsAdminV1alphaNumericValue } from "./googleanalyticsadminv1alphanumericvalue";


// GoogleAnalyticsAdminV1alphaAccessBetweenFilter
/** 
 * To express that the result needs to be between two numbers (inclusive).
**/
export class GoogleAnalyticsAdminV1alphaAccessBetweenFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromValue" })
  fromValue?: GoogleAnalyticsAdminV1alphaNumericValue;

  @Metadata({ data: "json, name=toValue" })
  toValue?: GoogleAnalyticsAdminV1alphaNumericValue;
}
