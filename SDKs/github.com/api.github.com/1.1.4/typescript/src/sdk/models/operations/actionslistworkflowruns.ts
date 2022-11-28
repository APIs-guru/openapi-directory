import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListWorkflowRunsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workflow_id" })
  workflowId: any;
}


export class ActionsListWorkflowRunsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actor" })
  actor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.WorkflowRunStatusEnum;
}


export class ActionsListWorkflowRuns200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;

  @SpeakeasyMetadata({ data: "json, name=workflow_runs", elemType: shared.WorkflowRun })
  workflowRuns: shared.WorkflowRun[];
}


export class ActionsListWorkflowRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListWorkflowRunsPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListWorkflowRunsQueryParams;
}


export class ActionsListWorkflowRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListWorkflowRuns200ApplicationJsonObject?: ActionsListWorkflowRuns200ApplicationJson;
}
