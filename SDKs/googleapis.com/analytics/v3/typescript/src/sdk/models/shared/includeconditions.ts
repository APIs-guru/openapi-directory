import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IncludeConditions
/** 
 * JSON template for an Analytics Remarketing Include Conditions.
**/
export class IncludeConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=daysToLookBack" })
  daysToLookBack?: number;

  @SpeakeasyMetadata({ data: "json, name=isSmartList" })
  isSmartList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: number;

  @SpeakeasyMetadata({ data: "json, name=segment" })
  segment?: string;
}
