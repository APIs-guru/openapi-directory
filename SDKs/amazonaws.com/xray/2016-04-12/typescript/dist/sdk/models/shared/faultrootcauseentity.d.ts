import { SpeakeasyBase } from "../../../internal/utils";
import { RootCauseException } from "./rootcauseexception";
/**
 * A collection of segments and corresponding subsegments associated to a trace summary fault error.
**/
export declare class FaultRootCauseEntity extends SpeakeasyBase {
    exceptions?: RootCauseException[];
    name?: string;
    remote?: boolean;
}
