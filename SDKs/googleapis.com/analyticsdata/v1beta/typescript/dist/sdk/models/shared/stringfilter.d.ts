import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Contains = "CONTAINS",
    FullRegexp = "FULL_REGEXP",
    PartialRegexp = "PARTIAL_REGEXP"
}
/**
 * The filter for string
**/
export declare class StringFilter extends SpeakeasyBase {
    caseSensitive?: boolean;
    matchType?: StringFilterMatchTypeEnum;
    value?: string;
}
