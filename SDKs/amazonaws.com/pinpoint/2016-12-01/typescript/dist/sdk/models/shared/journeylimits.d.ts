import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.
**/
export declare class JourneyLimits extends SpeakeasyBase {
    dailyCap?: number;
    endpointReentryCap?: number;
    endpointReentryInterval?: string;
    messagesPerSecond?: number;
}
