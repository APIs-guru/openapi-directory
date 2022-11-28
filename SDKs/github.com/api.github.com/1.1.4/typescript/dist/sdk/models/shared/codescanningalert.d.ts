import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { CodeScanningAlertInstance } from "./codescanningalertinstance";
import { CodeScanningAlertRule } from "./codescanningalertrule";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
export declare class CodeScanningAlert extends SpeakeasyBase {
    createdAt: Date;
    dismissedAt: Date;
    dismissedBy: SimpleUser;
    dismissedReason: string;
    htmlUrl: string;
    instancesUrl: string;
    mostRecentInstance: CodeScanningAlertInstance;
    number: number;
    rule: CodeScanningAlertRule;
    state: CodeScanningAlertStateEnum;
    tool: CodeScanningAnalysisTool;
    url: string;
}
