import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specification of an output context that is set when an intent is fulfilled.
**/
export declare class OutputContext extends SpeakeasyBase {
    name: string;
    timeToLiveInSeconds: number;
    turnsToLive: number;
}
