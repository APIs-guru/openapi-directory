import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilterinlistfilter";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilterstringfilter";


// GoogleAnalyticsAdminV1alphaExpandedDataSetFilter
/** 
 * A specific filter for a single dimension
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=inListFilter" })
  inListFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter;

  @Metadata({ data: "json, name=stringFilter" })
  stringFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter;
}
