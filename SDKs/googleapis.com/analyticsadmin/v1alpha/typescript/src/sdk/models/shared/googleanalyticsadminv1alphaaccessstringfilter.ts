import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Contains = "CONTAINS",
    FullRegexp = "FULL_REGEXP",
    PartialRegexp = "PARTIAL_REGEXP"
}


// GoogleAnalyticsAdminV1alphaAccessStringFilter
/** 
 * The filter for strings.
**/
export class GoogleAnalyticsAdminV1alphaAccessStringFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
