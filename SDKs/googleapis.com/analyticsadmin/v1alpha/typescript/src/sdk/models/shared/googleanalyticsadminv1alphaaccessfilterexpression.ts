import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaAccessFilter } from "./googleanalyticsadminv1alphaaccessfilter";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpressionList } from "./googleanalyticsadminv1alphaaccessfilterexpressionlist";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpression } from "./googleanalyticsadminv1alphaaccessfilterexpression";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpressionList } from "./googleanalyticsadminv1alphaaccessfilterexpressionlist";


// GoogleAnalyticsAdminV1alphaAccessFilterExpression
/** 
 * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
**/
export class GoogleAnalyticsAdminV1alphaAccessFilterExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessFilter" })
  accessFilter?: GoogleAnalyticsAdminV1alphaAccessFilter;

  @Metadata({ data: "json, name=andGroup" })
  andGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;

  @Metadata({ data: "json, name=notExpression" })
  notExpression?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;

  @Metadata({ data: "json, name=orGroup" })
  orGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
}
