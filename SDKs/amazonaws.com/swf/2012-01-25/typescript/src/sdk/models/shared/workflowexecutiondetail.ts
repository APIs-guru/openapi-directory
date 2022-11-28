import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionConfiguration } from "./workflowexecutionconfiguration";
import { WorkflowExecutionInfo } from "./workflowexecutioninfo";
import { WorkflowExecutionOpenCounts } from "./workflowexecutionopencounts";



// WorkflowExecutionDetail
/** 
 * Contains details about a workflow execution.
**/
export class WorkflowExecutionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionConfiguration" })
  executionConfiguration: WorkflowExecutionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=executionInfo" })
  executionInfo: WorkflowExecutionInfo;

  @SpeakeasyMetadata({ data: "json, name=latestActivityTaskTimestamp" })
  latestActivityTaskTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestExecutionContext" })
  latestExecutionContext?: string;

  @SpeakeasyMetadata({ data: "json, name=openCounts" })
  openCounts: WorkflowExecutionOpenCounts;
}
