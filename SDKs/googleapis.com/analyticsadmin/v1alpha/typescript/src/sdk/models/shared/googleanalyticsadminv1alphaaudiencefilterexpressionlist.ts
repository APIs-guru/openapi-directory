import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";



// GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList
/** 
 * A list of Audience filter expressions.
**/
export class GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterExpressions", elemType: GoogleAnalyticsAdminV1alphaAudienceFilterExpression })
  filterExpressions?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression[];
}
