import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { CodeScanningAlertInstance } from "./codescanningalertinstance";
import { CodeScanningAlertRuleSummary } from "./codescanningalertrulesummary";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";



export class CodeScanningAlertItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=dismissed_at" })
  dismissedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=dismissed_by" })
  dismissedBy: SimpleUser;

  @SpeakeasyMetadata({ data: "json, name=dismissed_reason" })
  dismissedReason: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=instances_url" })
  instancesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=most_recent_instance" })
  mostRecentInstance: CodeScanningAlertInstance;

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
