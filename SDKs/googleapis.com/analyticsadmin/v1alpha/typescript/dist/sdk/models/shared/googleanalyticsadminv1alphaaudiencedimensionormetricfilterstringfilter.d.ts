import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Contains = "CONTAINS",
    FullRegexp = "FULL_REGEXP"
}
/**
 * A filter for a string-type dimension that matches a particular pattern.
**/
export declare class GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter extends SpeakeasyBase {
    caseSensitive?: boolean;
    matchType?: GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilterMatchTypeEnum;
    value?: string;
}
