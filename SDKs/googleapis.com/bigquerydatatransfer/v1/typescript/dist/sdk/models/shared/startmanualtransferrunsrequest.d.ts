import { SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";
/**
 * A request to start manual transfer runs.
**/
export declare class StartManualTransferRunsRequest extends SpeakeasyBase {
    requestedRunTime?: string;
    requestedTimeRange?: TimeRange;
}
