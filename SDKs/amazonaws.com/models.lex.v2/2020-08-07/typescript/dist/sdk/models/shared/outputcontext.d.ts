import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a session context that is activated when an intent is fulfilled.
**/
export declare class OutputContext extends SpeakeasyBase {
    name: string;
    timeToLiveInSeconds: number;
    turnsToLive: number;
}
