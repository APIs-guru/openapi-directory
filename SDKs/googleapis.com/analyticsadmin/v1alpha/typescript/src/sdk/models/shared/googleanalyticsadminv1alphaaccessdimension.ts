import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAnalyticsAdminV1alphaAccessDimension
/** 
 * Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings.
**/
export class GoogleAnalyticsAdminV1alphaAccessDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionName" })
  dimensionName?: string;
}
