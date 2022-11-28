import { SpeakeasyBase } from "../../../internal/utils";
import { WaitTime } from "./waittime";
/**
 * Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.
**/
export declare class WaitActivity extends SpeakeasyBase {
    nextActivity?: string;
    waitTime?: WaitTime;
}
