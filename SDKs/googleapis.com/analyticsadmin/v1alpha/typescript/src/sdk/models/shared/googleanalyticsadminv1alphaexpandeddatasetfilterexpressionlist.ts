import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpression";


// GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList
/** 
 * A list of ExpandedDataSet filter expressions.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterExpressions", elemType: shared.GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression })
  filterExpressions?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression[];
}
