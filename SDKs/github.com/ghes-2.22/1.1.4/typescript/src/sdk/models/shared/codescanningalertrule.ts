import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CodeScanningAlertRuleSeverityEnum {
    None = "none",
    Note = "note",
    Warning = "warning",
    Error = "error"
}


export class CodeScanningAlertRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=full_description" })
  fullDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=help" })
  help?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: CodeScanningAlertRuleSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
