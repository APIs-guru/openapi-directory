import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowExecutionFilter } from "./workflowexecutionfilter";
import { ExecutionTimeFilter } from "./executiontimefilter";
import { TagFilter } from "./tagfilter";
import { WorkflowTypeFilter } from "./workflowtypefilter";


export class ListOpenWorkflowExecutionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=executionFilter" })
  executionFilter?: WorkflowExecutionFilter;

  @Metadata({ data: "json, name=maximumPageSize" })
  maximumPageSize?: number;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;

  @Metadata({ data: "json, name=startTimeFilter" })
  startTimeFilter: ExecutionTimeFilter;

  @Metadata({ data: "json, name=tagFilter" })
  tagFilter?: TagFilter;

  @Metadata({ data: "json, name=typeFilter" })
  typeFilter?: WorkflowTypeFilter;
}
