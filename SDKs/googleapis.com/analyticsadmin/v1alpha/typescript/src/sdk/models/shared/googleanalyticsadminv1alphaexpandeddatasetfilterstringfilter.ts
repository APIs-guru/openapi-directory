import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED"
,    Exact = "EXACT"
,    Contains = "CONTAINS"
}


// GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter
/** 
 * A filter for a string-type dimension that matches a particular pattern.
**/
export class GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=matchType" })
  matchType?: GoogleAnalyticsAdminV1alphaExpandedDataSetFilterStringFilterMatchTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
