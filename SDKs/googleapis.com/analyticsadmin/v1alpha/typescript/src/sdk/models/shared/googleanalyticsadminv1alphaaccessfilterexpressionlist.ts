import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpression } from "./googleanalyticsadminv1alphaaccessfilterexpression";


// GoogleAnalyticsAdminV1alphaAccessFilterExpressionList
/** 
 * A list of filter expressions.
**/
export class GoogleAnalyticsAdminV1alphaAccessFilterExpressionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=expressions", elemType: shared.GoogleAnalyticsAdminV1alphaAccessFilterExpression })
  expressions?: GoogleAnalyticsAdminV1alphaAccessFilterExpression[];
}
