import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeSize } from "./creativesize";
import { DayPartTargeting } from "./dayparttargeting";



// TargetingValue
/** 
 * A polymorphic targeting value used as part of Shared Targeting.
**/
export class TargetingValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeSizeValue" })
  creativeSizeValue?: CreativeSize;

  @SpeakeasyMetadata({ data: "json, name=dayPartTargetingValue" })
  dayPartTargetingValue?: DayPartTargeting;

  @SpeakeasyMetadata({ data: "json, name=longValue" })
  longValue?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
