import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessDimensionValue } from "./googleanalyticsadminv1alphaaccessdimensionvalue";
import { GoogleAnalyticsAdminV1alphaAccessMetricValue } from "./googleanalyticsadminv1alphaaccessmetricvalue";



// GoogleAnalyticsAdminV1alphaAccessRow
/** 
 * Access report data for each row.
**/
export class GoogleAnalyticsAdminV1alphaAccessRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionValues", elemType: GoogleAnalyticsAdminV1alphaAccessDimensionValue })
  dimensionValues?: GoogleAnalyticsAdminV1alphaAccessDimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=metricValues", elemType: GoogleAnalyticsAdminV1alphaAccessMetricValue })
  metricValues?: GoogleAnalyticsAdminV1alphaAccessMetricValue[];
}
