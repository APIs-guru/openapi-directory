import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpression";


// GoogleAnalyticsAdminV1alphaExpandedDataSet
/** 
 * A resource message representing a GA4 ExpandedDataSet.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataCollectionStartTime" })
  dataCollectionStartTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dimensionFilterExpression" })
  dimensionFilterExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;

  @Metadata({ data: "json, name=dimensionNames" })
  dimensionNames?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
