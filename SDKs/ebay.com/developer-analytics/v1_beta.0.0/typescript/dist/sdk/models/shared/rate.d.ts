import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * This complex type defines a &quot;rate&quot; as the quota of calls that can be made to a resource per time window, the remaining number of calls before the threshold is met, the amount of time until the time window resets, and the length of the time window (in seconds).
**/
export declare class Rate extends SpeakeasyBase {
    limit?: number;
    remaining?: number;
    reset?: string;
    timeWindow?: number;
}
