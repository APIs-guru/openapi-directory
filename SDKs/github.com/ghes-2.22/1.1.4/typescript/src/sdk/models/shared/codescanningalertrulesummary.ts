import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CodeScanningAlertRuleSummarySeverityEnum {
    None = "none",
    Note = "note",
    Warning = "warning",
    Error = "error"
}


export class CodeScanningAlertRuleSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: CodeScanningAlertRuleSummarySeverityEnum;
}
