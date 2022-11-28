import { SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAlertClassificationEnum } from "./codescanningalertclassificationenum";
import { SimpleUser } from "./simpleuser";
import { CodeScanningAlertDismissedReasonEnum } from "./codescanningalertdismissedreasonenum";
import { CodeScanningAlertInstance } from "./codescanningalertinstance";
import { CodeScanningAlertRuleSummary } from "./codescanningalertrulesummary";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
export declare class CodeScanningAlertItems extends SpeakeasyBase {
    classification: CodeScanningAlertClassificationEnum;
    createdAt: Date;
    dismissedAt: Date;
    dismissedBy: SimpleUser;
    dismissedReason: CodeScanningAlertDismissedReasonEnum;
    htmlUrl: string;
    instance: CodeScanningAlertInstance;
    number: number;
    rule: CodeScanningAlertRuleSummary;
    state: CodeScanningAlertStateEnum;
    tool: CodeScanningAnalysisTool;
    url: string;
}
