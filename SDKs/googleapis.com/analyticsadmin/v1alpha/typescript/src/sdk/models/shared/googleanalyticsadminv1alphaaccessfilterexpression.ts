import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessFilter } from "./googleanalyticsadminv1alphaaccessfilter";
import { GoogleAnalyticsAdminV1alphaAccessFilterExpressionList } from "./googleanalyticsadminv1alphaaccessfilterexpressionlist";



// GoogleAnalyticsAdminV1alphaAccessFilterExpression
/** 
 * Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.
**/
export class GoogleAnalyticsAdminV1alphaAccessFilterExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessFilter" })
  accessFilter?: GoogleAnalyticsAdminV1alphaAccessFilter;

  @SpeakeasyMetadata({ data: "json, name=andGroup" })
  andGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;

  @SpeakeasyMetadata({ data: "json, name=notExpression" })
  notExpression?: GoogleAnalyticsAdminV1alphaAccessFilterExpression;

  @SpeakeasyMetadata({ data: "json, name=orGroup" })
  orGroup?: GoogleAnalyticsAdminV1alphaAccessFilterExpressionList;
}
