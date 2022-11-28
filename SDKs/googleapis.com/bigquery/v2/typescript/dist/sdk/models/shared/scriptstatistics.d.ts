import { SpeakeasyBase } from "../../../internal/utils";
import { ScriptStackFrame } from "./scriptstackframe";
export declare class ScriptStatistics extends SpeakeasyBase {
    evaluationKind?: string;
    stackFrames?: ScriptStackFrame[];
}
