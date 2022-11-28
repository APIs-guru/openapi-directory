import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CodeScanningAlertRuleSeverityEnum {
    None = "none",
    Note = "note",
    Warning = "warning",
    Error = "error"
}
export declare class CodeScanningAlertRule extends SpeakeasyBase {
    description?: string;
    fullDescription?: string;
    help?: string;
    id?: string;
    name?: string;
    severity?: CodeScanningAlertRuleSeverityEnum;
    tags?: string[];
}
