import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Contains = "CONTAINS",
    FullRegexp = "FULL_REGEXP"
}


// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter
/** 
 * A filter for a string-type dimension that matches a particular pattern.
**/
export class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
