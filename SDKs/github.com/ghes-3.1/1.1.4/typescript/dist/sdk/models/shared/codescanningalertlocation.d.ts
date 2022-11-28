import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe a region within a file for the alert.
**/
export declare class CodeScanningAlertLocation extends SpeakeasyBase {
    endColumn?: number;
    endLine?: number;
    path?: string;
    startColumn?: number;
    startLine?: number;
}
