import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";


// GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList
/** 
 * A list of Audience filter expressions.
**/
export class GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterExpressions", elemType: shared.GoogleAnalyticsAdminV1alphaAudienceFilterExpression })
  filterExpressions?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression[];
}
