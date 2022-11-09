import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreativeSize } from "./creativesize";
import { DayPartTargeting } from "./dayparttargeting";


// TargetingValue
/** 
 * A polymorphic targeting value used as part of Shared Targeting.
**/
export class TargetingValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeSizeValue" })
  creativeSizeValue?: CreativeSize;

  @Metadata({ data: "json, name=dayPartTargetingValue" })
  dayPartTargetingValue?: DayPartTargeting;

  @Metadata({ data: "json, name=longValue" })
  longValue?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
