import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScriptStackFrame extends SpeakeasyBase {
  @Metadata({ data: "json, name=endColumn" })
  endColumn?: number;

  @Metadata({ data: "json, name=endLine" })
  endLine?: number;

  @Metadata({ data: "json, name=procedureId" })
  procedureId?: string;

  @Metadata({ data: "json, name=startColumn" })
  startColumn?: number;

  @Metadata({ data: "json, name=startLine" })
  startLine?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
