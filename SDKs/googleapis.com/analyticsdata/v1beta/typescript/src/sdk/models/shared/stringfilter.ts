import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum StringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED"
,    Exact = "EXACT"
,    BeginsWith = "BEGINS_WITH"
,    EndsWith = "ENDS_WITH"
,    Contains = "CONTAINS"
,    FullRegexp = "FULL_REGEXP"
,    PartialRegexp = "PARTIAL_REGEXP"
}


// StringFilter
/** 
 * The filter for string
**/
export class StringFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=matchType" })
  matchType?: StringFilterMatchTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
