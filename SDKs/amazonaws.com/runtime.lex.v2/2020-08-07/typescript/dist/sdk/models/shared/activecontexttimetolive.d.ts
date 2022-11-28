import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The time that a context is active. You can specify the time to live in seconds or in conversation turns.
**/
export declare class ActiveContextTimeToLive extends SpeakeasyBase {
    timeToLiveInSeconds: number;
    turnsToLive: number;
}
