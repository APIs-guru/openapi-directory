import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED"
,    Exact = "EXACT"
,    BeginsWith = "BEGINS_WITH"
,    EndsWith = "ENDS_WITH"
,    Contains = "CONTAINS"
,    FullRegexp = "FULL_REGEXP"
,    PartialRegexp = "PARTIAL_REGEXP"
}


// GoogleAnalyticsAdminV1alphaAccessStringFilter
/** 
 * The filter for strings.
**/
export class GoogleAnalyticsAdminV1alphaAccessStringFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=matchType" })
  matchType?: GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
