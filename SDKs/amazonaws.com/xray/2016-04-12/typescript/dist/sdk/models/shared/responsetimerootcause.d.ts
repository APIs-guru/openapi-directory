import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseTimeRootCauseService } from "./responsetimerootcauseservice";
/**
 * The root cause information for a response time warning.
**/
export declare class ResponseTimeRootCause extends SpeakeasyBase {
    clientImpacting?: boolean;
    services?: ResponseTimeRootCauseService[];
}
