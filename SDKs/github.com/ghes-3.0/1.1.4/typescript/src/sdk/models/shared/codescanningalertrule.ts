import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CodeScanningAlertRuleSeverityEnum {
    None = "none"
,    Note = "note"
,    Warning = "warning"
,    Error = "error"
}


export class CodeScanningAlertRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=full_description" })
  fullDescription?: string;

  @Metadata({ data: "json, name=help" })
  help?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: CodeScanningAlertRuleSeverityEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
