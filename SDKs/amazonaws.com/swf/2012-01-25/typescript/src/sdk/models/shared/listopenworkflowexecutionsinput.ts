import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowExecutionFilter } from "./workflowexecutionfilter";
import { ExecutionTimeFilter } from "./executiontimefilter";
import { TagFilter } from "./tagfilter";
import { WorkflowTypeFilter } from "./workflowtypefilter";



export class ListOpenWorkflowExecutionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=executionFilter" })
  executionFilter?: WorkflowExecutionFilter;

  @SpeakeasyMetadata({ data: "json, name=maximumPageSize" })
  maximumPageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startTimeFilter" })
  startTimeFilter: ExecutionTimeFilter;

  @SpeakeasyMetadata({ data: "json, name=tagFilter" })
  tagFilter?: TagFilter;

  @SpeakeasyMetadata({ data: "json, name=typeFilter" })
  typeFilter?: WorkflowTypeFilter;
}
