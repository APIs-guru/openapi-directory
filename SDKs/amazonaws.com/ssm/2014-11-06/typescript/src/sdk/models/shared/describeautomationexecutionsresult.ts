import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutomationExecutionMetadata } from "./automationexecutionmetadata";


export class DescribeAutomationExecutionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomationExecutionMetadataList", elemType: shared.AutomationExecutionMetadata })
  automationExecutionMetadataList?: AutomationExecutionMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
