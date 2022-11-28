import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorRootCauseEntity } from "./errorrootcauseentity";
/**
 * A collection of fields identifying the services in a trace summary error.
**/
export declare class ErrorRootCauseService extends SpeakeasyBase {
    accountId?: string;
    entityPath?: ErrorRootCauseEntity[];
    inferred?: boolean;
    name?: string;
    names?: string[];
    type?: string;
}
