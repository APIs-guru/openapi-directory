import { SpeakeasyBase } from "../../../internal/utils";
import { RootCauseException } from "./rootcauseexception";
/**
 * A collection of segments and corresponding subsegments associated to a trace summary error.
**/
export declare class ErrorRootCauseEntity extends SpeakeasyBase {
    exceptions?: RootCauseException[];
    name?: string;
    remote?: boolean;
}
