import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScriptStackFrame } from "./scriptstackframe";



export class ScriptStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluationKind" })
  evaluationKind?: string;

  @SpeakeasyMetadata({ data: "json, name=stackFrames", elemType: ScriptStackFrame })
  stackFrames?: ScriptStackFrame[];
}
