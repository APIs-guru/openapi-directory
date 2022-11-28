import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAlertClassificationEnum } from "./codescanningalertclassificationenum";
import { SimpleUser } from "./simpleuser";
import { CodeScanningAlertDismissedReasonEnum } from "./codescanningalertdismissedreasonenum";
import { CodeScanningAlertInstance } from "./codescanningalertinstance";
import { CodeScanningAlertRuleSummary } from "./codescanningalertrulesummary";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";



export class CodeScanningAlertItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification: CodeScanningAlertClassificationEnum;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=dismissed_at" })
  dismissedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=dismissed_by" })
  dismissedBy: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=dismissed_reason" })
  dismissedReason: CodeScanningAlertDismissedReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: CodeScanningAlertInstance;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule: CodeScanningAlertRuleSummary;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: CodeScanningAlertStateEnum;

  @SpeakeasyMetadata({ data: "json, name=tool" })
  tool: CodeScanningAnalysisTool;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
