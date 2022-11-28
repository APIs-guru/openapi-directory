import { SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";
/**
 * Specifies the settings for an event that causes a journey activity to start.
**/
export declare class EventStartCondition extends SpeakeasyBase {
    eventFilter?: EventFilter;
    segmentId?: string;
}
