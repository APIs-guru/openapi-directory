import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeploymentForRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment_uuid" })
  deploymentUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetDeploymentForRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeploymentForRepositoryPathParams;
}


export class GetDeploymentForRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deployment?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
