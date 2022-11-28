import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Contains = "CONTAINS",
    FullRegexp = "FULL_REGEXP",
    PartialRegexp = "PARTIAL_REGEXP"
}
/**
 * The filter for strings.
**/
export declare class GoogleAnalyticsAdminV1alphaAccessStringFilter extends SpeakeasyBase {
    caseSensitive?: boolean;
    matchType?: GoogleAnalyticsAdminV1alphaAccessStringFilterMatchTypeEnum;
    value?: string;
}
