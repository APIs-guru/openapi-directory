import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecution } from "./workflowexecution";


export class GetWorkflowExecutionHistoryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=execution" })
  execution: WorkflowExecution;

  @Metadata({ data: "json, name=maximumPageSize" })
  maximumPageSize?: number;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;
}
