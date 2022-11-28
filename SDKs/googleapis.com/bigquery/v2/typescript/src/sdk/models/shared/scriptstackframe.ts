import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScriptStackFrame extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endColumn" })
  endColumn?: number;

  @SpeakeasyMetadata({ data: "json, name=endLine" })
  endLine?: number;

  @SpeakeasyMetadata({ data: "json, name=procedureId" })
  procedureId?: string;

  @SpeakeasyMetadata({ data: "json, name=startColumn" })
  startColumn?: number;

  @SpeakeasyMetadata({ data: "json, name=startLine" })
  startLine?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
