import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList } from "./googleanalyticsadminv1alphaaudiencefilterexpressionlist";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilter";
import { GoogleAnalyticsAdminV1alphaAudienceEventFilter } from "./googleanalyticsadminv1alphaaudienceeventfilter";



// GoogleAnalyticsAdminV1alphaAudienceFilterExpression
/** 
 * A logical expression of Audience dimension, metric, or event filters.
**/
export class GoogleAnalyticsAdminV1alphaAudienceFilterExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=andGroup" })
  andGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;

  @SpeakeasyMetadata({ data: "json, name=dimensionOrMetricFilter" })
  dimensionOrMetricFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter;

  @SpeakeasyMetadata({ data: "json, name=eventFilter" })
  eventFilter?: GoogleAnalyticsAdminV1alphaAudienceEventFilter;

  @SpeakeasyMetadata({ data: "json, name=notExpression" })
  notExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;

  @SpeakeasyMetadata({ data: "json, name=orGroup" })
  orGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
}
