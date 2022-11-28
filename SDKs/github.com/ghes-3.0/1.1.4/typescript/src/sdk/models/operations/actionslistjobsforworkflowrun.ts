import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListJobsForWorkflowRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}

export enum ActionsListJobsForWorkflowRunFilterEnum {
    Latest = "latest",
    All = "all"
}


export class ActionsListJobsForWorkflowRunQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: ActionsListJobsForWorkflowRunFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListJobsForWorkflowRun200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: shared.Job })
  jobs: shared.Job[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListJobsForWorkflowRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListJobsForWorkflowRunPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListJobsForWorkflowRunQueryParams;
}


export class ActionsListJobsForWorkflowRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListJobsForWorkflowRun200ApplicationJsonObject?: ActionsListJobsForWorkflowRun200ApplicationJson;
}
