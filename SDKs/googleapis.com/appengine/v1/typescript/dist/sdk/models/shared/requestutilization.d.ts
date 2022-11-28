import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Target scaling by request utilization. Only applicable in the App Engine flexible environment.
**/
export declare class RequestUtilization extends SpeakeasyBase {
    targetConcurrentRequests?: number;
    targetRequestCountPerSecond?: number;
}
