import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Target scaling by network usage. Only applicable in the App Engine flexible environment.
**/
export declare class NetworkUtilization extends SpeakeasyBase {
    targetReceivedBytesPerSecond?: number;
    targetReceivedPacketsPerSecond?: number;
    targetSentBytesPerSecond?: number;
    targetSentPacketsPerSecond?: number;
}
