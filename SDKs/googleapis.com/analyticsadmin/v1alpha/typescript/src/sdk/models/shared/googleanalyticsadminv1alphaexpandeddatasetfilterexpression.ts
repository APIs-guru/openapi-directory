import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpressionlist";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilter";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression } from "./googleanalyticsadminv1alphaexpandeddatasetfilterexpression";


// GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression
/** 
 * A logical expression of EnhancedDataSet dimension filters.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=andGroup" })
  andGroup?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpressionList;

  @Metadata({ data: "json, name=filter" })
  filter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilter;

  @Metadata({ data: "json, name=notExpression" })
  notExpression?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterExpression;
}
