import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListWorkflowRunArtifactsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsListWorkflowRunArtifactsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListWorkflowRunArtifactsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListWorkflowRunArtifactsPathParams;

  @Metadata()
  queryParams: ActionsListWorkflowRunArtifactsQueryParams;
}


export class ActionsListWorkflowRunArtifacts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifacts", elemType: shared.Artifact })
  artifacts: shared.Artifact[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListWorkflowRunArtifactsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListWorkflowRunArtifacts200ApplicationJsonObject?: ActionsListWorkflowRunArtifacts200ApplicationJson;
}
