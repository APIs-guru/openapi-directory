import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    Contains = "CONTAINS"
}
/**
 * A filter for a string-type dimension that matches a particular pattern.
**/
export declare class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter extends SpeakeasyBase {
    caseSensitive?: boolean;
    matchType?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum;
    value?: string;
}
