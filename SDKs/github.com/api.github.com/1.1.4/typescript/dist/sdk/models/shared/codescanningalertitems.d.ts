import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { CodeScanningAlertInstance } from "./codescanningalertinstance";
import { CodeScanningAlertRuleSummary } from "./codescanningalertrulesummary";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
export declare class CodeScanningAlertItems extends SpeakeasyBase {
    createdAt: Date;
    dismissedAt: Date;
    dismissedBy: SimpleUser;
    dismissedReason: string;
    htmlUrl: string;
    instancesUrl: string;
    mostRecentInstance: CodeScanningAlertInstance;
    number: number;
    rule: CodeScanningAlertRuleSummary;
    state: CodeScanningAlertStateEnum;
    tool: CodeScanningAnalysisTool;
    url: string;
}
