import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpression } from "./googleanalyticsadminv1alphaaccessfilterexpression";



// GoogleAnalyticsAdminV1alphaAccessFilterExpressionList
/** 
 * A list of filter expressions.
**/
export class GoogleAnalyticsAdminV1alphaAccessFilterExpressionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expressions", elemType: GoogleAnalyticsAdminV1alphaAccessFilterExpression })
  expressions?: GoogleAnalyticsAdminV1alphaAccessFilterExpression[];
}
