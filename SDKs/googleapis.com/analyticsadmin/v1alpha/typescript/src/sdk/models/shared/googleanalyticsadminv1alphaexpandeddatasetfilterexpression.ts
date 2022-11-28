import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpressionlist";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilter";



// GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression
/** 
 * A logical expression of EnhancedDataSet dimension filters.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=andGroup" })
  andGroup?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilter;

  @SpeakeasyMetadata({ data: "json, name=notExpression" })
  notExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
}
