import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListWorkflowRunsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListWorkflowRunsForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=actor" })
  actor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=branch" })
  branch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event" })
  event?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.WorkflowRunStatusEnum;
}


export class ActionsListWorkflowRunsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListWorkflowRunsForRepoPathParams;

  @Metadata()
  queryParams: ActionsListWorkflowRunsForRepoQueryParams;
}


export class ActionsListWorkflowRunsForRepo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=total_count" })
  totalCount: number;

  @Metadata({ data: "json, name=workflow_runs", elemType: shared.WorkflowRun })
  workflowRuns: shared.WorkflowRun[];
}


export class ActionsListWorkflowRunsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListWorkflowRunsForRepo200ApplicationJsonObject?: ActionsListWorkflowRunsForRepo200ApplicationJson;
}
