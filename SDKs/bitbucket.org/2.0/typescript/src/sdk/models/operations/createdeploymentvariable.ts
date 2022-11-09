import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDeploymentVariablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_uuid" })
  environmentUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateDeploymentVariableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=variable_uuid" })
  variableUuid: string;
}


export class CreateDeploymentVariableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDeploymentVariablePathParams;

  @Metadata()
  queryParams: CreateDeploymentVariableQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreateDeploymentVariableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deploymentVariable?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
