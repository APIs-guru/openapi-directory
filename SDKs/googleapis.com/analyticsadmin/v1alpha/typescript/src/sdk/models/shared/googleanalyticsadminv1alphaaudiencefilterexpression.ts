import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList } from "./googleanalyticsadminv1alphaaudiencefilterexpressionlist";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilter";
import { GoogleAnalyticsAdminV1alphaAudienceEventFilter } from "./googleanalyticsadminv1alphaaudienceeventfilter";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpression } from "./googleanalyticsadminv1alphaaudiencefilterexpression";
import { GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList } from "./googleanalyticsadminv1alphaaudiencefilterexpressionlist";


// GoogleAnalyticsAdminV1alphaAudienceFilterExpression
/** 
 * A logical expression of Audience dimension, metric, or event filters.
**/
export class GoogleAnalyticsAdminV1alphaAudienceFilterExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=andGroup" })
  andGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;

  @Metadata({ data: "json, name=dimensionOrMetricFilter" })
  dimensionOrMetricFilter?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter;

  @Metadata({ data: "json, name=eventFilter" })
  eventFilter?: GoogleAnalyticsAdminV1alphaAudienceEventFilter;

  @Metadata({ data: "json, name=notExpression" })
  notExpression?: GoogleAnalyticsAdminV1alphaAudienceFilterExpression;

  @Metadata({ data: "json, name=orGroup" })
  orGroup?: GoogleAnalyticsAdminV1alphaAudienceFilterExpressionList;
}
