import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpression";



// GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList
/** 
 * A list of ExpandedDataSet filter expressions.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterExpressions", elemType: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression })
  filterExpressions?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression[];
}
