import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEnvironmentForRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uuid" })
  environmentUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetEnvironmentForRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnvironmentForRepositoryPathParams;
}


export class GetEnvironmentForRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deploymentEnvironment?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
