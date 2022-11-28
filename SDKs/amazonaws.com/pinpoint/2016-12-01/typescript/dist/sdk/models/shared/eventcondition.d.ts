import { SpeakeasyBase } from "../../../internal/utils";
import { EventDimensions } from "./eventdimensions";
/**
 * Specifies the conditions to evaluate for an event that applies to an activity in a journey.
**/
export declare class EventCondition extends SpeakeasyBase {
    dimensions?: EventDimensions;
    messageActivity?: string;
}
