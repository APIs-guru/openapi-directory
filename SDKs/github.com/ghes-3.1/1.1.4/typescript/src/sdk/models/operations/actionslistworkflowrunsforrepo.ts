import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListWorkflowRunsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListWorkflowRunsForRepoQueryParams extends SpeakeasyBase {
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


export class ActionsListWorkflowRunsForRepo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;

  @SpeakeasyMetadata({ data: "json, name=workflow_runs", elemType: shared.WorkflowRun })
  workflowRuns: shared.WorkflowRun[];
}


export class ActionsListWorkflowRunsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListWorkflowRunsForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListWorkflowRunsForRepoQueryParams;
}


export class ActionsListWorkflowRunsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListWorkflowRunsForRepo200ApplicationJsonObject?: ActionsListWorkflowRunsForRepo200ApplicationJson;
}
