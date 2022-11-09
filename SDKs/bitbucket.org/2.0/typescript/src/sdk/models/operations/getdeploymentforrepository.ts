import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeploymentForRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deployment_uuid" })
  deploymentUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetDeploymentForRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeploymentForRepositoryPathParams;
}


export class GetDeploymentForRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deployment?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
