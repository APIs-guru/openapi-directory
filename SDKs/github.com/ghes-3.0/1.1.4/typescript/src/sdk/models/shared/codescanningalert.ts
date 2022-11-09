import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimpleUser } from "./simpleuser";
import { CodeScanningAlertDismissedReasonEnum } from "./codescanningalertdismissedreasonenum";
import { CodeScanningAlertInstance } from "./codescanningalertinstance";
import { CodeScanningAlertRule } from "./codescanningalertrule";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";


export class CodeScanningAlert extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=dismissed_at" })
  dismissedAt: Date;

  @Metadata({ data: "json, name=dismissed_by" })
  dismissedBy: SimpleUser;

  @Metadata({ data: "json, name=dismissed_reason" })
  dismissedReason: CodeScanningAlertDismissedReasonEnum;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=instances" })
  instances?: any;

  @Metadata({ data: "json, name=instances_url" })
  instancesUrl: string;

  @Metadata({ data: "json, name=most_recent_instance" })
  mostRecentInstance: CodeScanningAlertInstance;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=rule" })
  rule: CodeScanningAlertRule;

  @Metadata({ data: "json, name=state" })
  state: CodeScanningAlertStateEnum;

  @Metadata({ data: "json, name=tool" })
  tool: CodeScanningAnalysisTool;

  @Metadata({ data: "json, name=url" })
  url: string;
}
