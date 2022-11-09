import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CodeScanningAlertRuleSummarySeverityEnum {
    None = "none"
,    Note = "note"
,    Warning = "warning"
,    Error = "error"
}


export class CodeScanningAlertRuleSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: CodeScanningAlertRuleSummarySeverityEnum;
}
