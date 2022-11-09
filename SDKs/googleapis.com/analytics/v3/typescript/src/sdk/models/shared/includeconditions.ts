import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IncludeConditions
/** 
 * JSON template for an Analytics Remarketing Include Conditions.
**/
export class IncludeConditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=daysToLookBack" })
  daysToLookBack?: number;

  @Metadata({ data: "json, name=isSmartList" })
  isSmartList?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: number;

  @Metadata({ data: "json, name=segment" })
  segment?: string;
}
