import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScriptStackFrame } from "./scriptstackframe";


export class ScriptStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluationKind" })
  evaluationKind?: string;

  @Metadata({ data: "json, name=stackFrames", elemType: shared.ScriptStackFrame })
  stackFrames?: ScriptStackFrame[];
}
