import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    Contains = "CONTAINS"
}


// GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter
/** 
 * A filter for a string-type dimension that matches a particular pattern.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
