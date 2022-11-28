import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeSize } from "./creativesize";
import { DayPartTargeting } from "./dayparttargeting";
/**
 * A polymorphic targeting value used as part of Shared Targeting.
**/
export declare class TargetingValue extends SpeakeasyBase {
    creativeSizeValue?: CreativeSize;
    dayPartTargetingValue?: DayPartTargeting;
    longValue?: string;
    stringValue?: string;
}
