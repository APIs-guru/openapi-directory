import { SpeakeasyBase } from "../../../internal/utils";
import { FaultRootCauseService } from "./faultrootcauseservice";
/**
 * The root cause information for a trace summary fault.
**/
export declare class FaultRootCause extends SpeakeasyBase {
    clientImpacting?: boolean;
    services?: FaultRootCauseService[];
}
