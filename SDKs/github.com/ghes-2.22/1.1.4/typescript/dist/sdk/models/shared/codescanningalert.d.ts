import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { CodeScanningAlertDismissedReasonEnum } from "./codescanningalertdismissedreasonenum";
import { CodeScanningAlertRule } from "./codescanningalertrule";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
export declare class CodeScanningAlert extends SpeakeasyBase {
    createdAt: Date;
    dismissedAt: Date;
    dismissedBy: SimpleUser;
    dismissedReason: CodeScanningAlertDismissedReasonEnum;
    htmlUrl: string;
    instances?: any;
    number: number;
    rule: CodeScanningAlertRule;
    state: CodeScanningAlertStateEnum;
    tool: CodeScanningAnalysisTool;
    url: string;
}
