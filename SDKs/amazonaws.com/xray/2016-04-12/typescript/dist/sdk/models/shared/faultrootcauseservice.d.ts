import { SpeakeasyBase } from "../../../internal/utils";
import { FaultRootCauseEntity } from "./faultrootcauseentity";
/**
 * A collection of fields identifying the services in a trace summary fault.
**/
export declare class FaultRootCauseService extends SpeakeasyBase {
    accountId?: string;
    entityPath?: FaultRootCauseEntity[];
    inferred?: boolean;
    name?: string;
    names?: string[];
    type?: string;
}
