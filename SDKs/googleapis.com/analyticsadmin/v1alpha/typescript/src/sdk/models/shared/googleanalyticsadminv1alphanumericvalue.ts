import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaNumericValue
/** 
 * To represent a number.
**/
export class GoogleAnalyticsAdminV1alphaNumericValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=int64Value" })
  int64Value?: string;
}
