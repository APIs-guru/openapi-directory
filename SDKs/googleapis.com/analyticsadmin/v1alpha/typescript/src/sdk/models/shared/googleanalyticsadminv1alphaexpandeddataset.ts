import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpression";



// GoogleAnalyticsAdminV1alphaExpandedDataSet
/** 
 * A resource message representing a GA4 ExpandedDataSet.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataCollectionStartTime" })
  dataCollectionStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensionFilterExpression" })
  dimensionFilterExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;

  @SpeakeasyMetadata({ data: "json, name=dimensionNames" })
  dimensionNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
