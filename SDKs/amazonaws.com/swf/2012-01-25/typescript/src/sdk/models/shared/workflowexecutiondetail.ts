import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecutionConfiguration } from "./workflowexecutionconfiguration";
import { WorkflowExecutionInfo } from "./workflowexecutioninfo";
import { WorkflowExecutionOpenCounts } from "./workflowexecutionopencounts";


// WorkflowExecutionDetail
/** 
 * Contains details about a workflow execution.
**/
export class WorkflowExecutionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionConfiguration" })
  executionConfiguration: WorkflowExecutionConfiguration;

  @Metadata({ data: "json, name=executionInfo" })
  executionInfo: WorkflowExecutionInfo;

  @Metadata({ data: "json, name=latestActivityTaskTimestamp" })
  latestActivityTaskTimestamp?: Date;

  @Metadata({ data: "json, name=latestExecutionContext" })
  latestExecutionContext?: string;

  @Metadata({ data: "json, name=openCounts" })
  openCounts: WorkflowExecutionOpenCounts;
}
