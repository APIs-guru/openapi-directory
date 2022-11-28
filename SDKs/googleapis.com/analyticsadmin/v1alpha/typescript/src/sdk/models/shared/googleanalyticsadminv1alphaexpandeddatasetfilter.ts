import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilterinlistfilter";
import { GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter } from "./googleanalyticsadminv1alphaexpandeddatasetfilterstringfilter";



// GoogleAnalyticsAdminV1alphaExpandedDataSetFilter
/** 
 * A specific filter for a single dimension
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=inListFilter" })
  inListFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterInListFilter;

  @SpeakeasyMetadata({ data: "json, name=stringFilter" })
  stringFilter?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter;
}
