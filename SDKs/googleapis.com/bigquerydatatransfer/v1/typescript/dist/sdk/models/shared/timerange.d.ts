import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A specification for a time range, this will request transfer runs with run_time between start_time (inclusive) and end_time (exclusive).
**/
export declare class TimeRange extends SpeakeasyBase {
    endTime?: string;
    startTime?: string;
}
