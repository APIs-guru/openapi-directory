import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecutionMetadata } from "./automationexecutionmetadata";



export class DescribeAutomationExecutionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomationExecutionMetadataList", elemType: AutomationExecutionMetadata })
  automationExecutionMetadataList?: AutomationExecutionMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
