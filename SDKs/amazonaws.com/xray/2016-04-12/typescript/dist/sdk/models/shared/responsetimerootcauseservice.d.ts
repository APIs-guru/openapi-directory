import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseTimeRootCauseEntity } from "./responsetimerootcauseentity";
/**
 * A collection of fields identifying the service in a response time warning.
**/
export declare class ResponseTimeRootCauseService extends SpeakeasyBase {
    accountId?: string;
    entityPath?: ResponseTimeRootCauseEntity[];
    inferred?: boolean;
    name?: string;
    names?: string[];
    type?: string;
}
