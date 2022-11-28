import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CodeScanningAlertRuleSummarySeverityEnum {
    None = "none",
    Note = "note",
    Warning = "warning",
    Error = "error"
}
export declare class CodeScanningAlertRuleSummary extends SpeakeasyBase {
    description?: string;
    id?: string;
    name?: string;
    severity?: CodeScanningAlertRuleSummarySeverityEnum;
}
