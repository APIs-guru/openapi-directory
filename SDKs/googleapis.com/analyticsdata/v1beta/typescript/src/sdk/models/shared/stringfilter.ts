import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    Exact = "EXACT",
    BeginsWith = "BEGINS_WITH",
    EndsWith = "ENDS_WITH",
    Contains = "CONTAINS",
    FullRegexp = "FULL_REGEXP",
    PartialRegexp = "PARTIAL_REGEXP"
}


// StringFilter
/** 
 * The filter for string
**/
export class StringFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchType" })
  matchType?: StringFilterMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
