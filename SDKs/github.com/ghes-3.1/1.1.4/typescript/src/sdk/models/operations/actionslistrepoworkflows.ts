import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListRepoWorkflowsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListRepoWorkflowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListRepoWorkflowsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListRepoWorkflowsPathParams;

  @Metadata()
  queryParams: ActionsListRepoWorkflowsQueryParams;
}


export class ActionsListRepoWorkflows200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=total_count" })
  totalCount: number;

  @Metadata({ data: "json, name=workflows", elemType: shared.Workflow })
  workflows: shared.Workflow[];
}


export class ActionsListRepoWorkflowsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListRepoWorkflows200ApplicationJsonObject?: ActionsListRepoWorkflows200ApplicationJson;
}
