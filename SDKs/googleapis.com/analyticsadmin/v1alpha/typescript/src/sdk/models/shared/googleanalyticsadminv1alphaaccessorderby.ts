import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy } from "./googleanalyticsadminv1alphaaccessorderbydimensionorderby";
import { GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy } from "./googleanalyticsadminv1alphaaccessorderbymetricorderby";



// GoogleAnalyticsAdminV1alphaAccessOrderBy
/** 
 * Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering.
**/
export class GoogleAnalyticsAdminV1alphaAccessOrderBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy;
}
