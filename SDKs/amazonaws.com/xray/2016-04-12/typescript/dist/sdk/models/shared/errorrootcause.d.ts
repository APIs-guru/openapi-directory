import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorRootCauseService } from "./errorrootcauseservice";
/**
 * The root cause of a trace summary error.
**/
export declare class ErrorRootCause extends SpeakeasyBase {
    clientImpacting?: boolean;
    services?: ErrorRootCauseService[];
}
