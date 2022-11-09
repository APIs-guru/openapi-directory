import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaAccessDimensionValue } from "./googleanalyticsadminv1alphaaccessdimensionvalue";
import { GoogleAnalyticsAdminV1alphaAccessMetricValue } from "./googleanalyticsadminv1alphaaccessmetricvalue";


// GoogleAnalyticsAdminV1alphaAccessRow
/** 
 * Access report data for each row.
**/
export class GoogleAnalyticsAdminV1alphaAccessRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionValues", elemType: shared.GoogleAnalyticsAdminV1alphaAccessDimensionValue })
  dimensionValues?: GoogleAnalyticsAdminV1alphaAccessDimensionValue[];

  @Metadata({ data: "json, name=metricValues", elemType: shared.GoogleAnalyticsAdminV1alphaAccessMetricValue })
  metricValues?: GoogleAnalyticsAdminV1alphaAccessMetricValue[];
}
