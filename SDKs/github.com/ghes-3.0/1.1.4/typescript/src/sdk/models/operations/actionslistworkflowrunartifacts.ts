import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListWorkflowRunArtifactsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsListWorkflowRunArtifactsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListWorkflowRunArtifacts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts", elemType: shared.Artifact })
  artifacts: shared.Artifact[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListWorkflowRunArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListWorkflowRunArtifactsPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListWorkflowRunArtifactsQueryParams;
}


export class ActionsListWorkflowRunArtifactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListWorkflowRunArtifacts200ApplicationJsonObject?: ActionsListWorkflowRunArtifacts200ApplicationJson;
}
