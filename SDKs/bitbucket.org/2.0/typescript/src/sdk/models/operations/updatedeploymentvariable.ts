import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeploymentVariablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_uuid" })
  environmentUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable_uuid" })
  variableUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateDeploymentVariableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeploymentVariablePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdateDeploymentVariableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deploymentVariable?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
