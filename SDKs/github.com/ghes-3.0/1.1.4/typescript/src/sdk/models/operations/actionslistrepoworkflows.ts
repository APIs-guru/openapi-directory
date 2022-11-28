import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListRepoWorkflowsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListRepoWorkflowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListRepoWorkflows200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;

  @SpeakeasyMetadata({ data: "json, name=workflows", elemType: shared.Workflow })
  workflows: shared.Workflow[];
}


export class ActionsListRepoWorkflowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListRepoWorkflowsPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListRepoWorkflowsQueryParams;
}


export class ActionsListRepoWorkflowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListRepoWorkflows200ApplicationJsonObject?: ActionsListRepoWorkflows200ApplicationJson;
}
