import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEnvironmentForRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uuid" })
  environmentUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateEnvironmentForRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEnvironmentForRepositoryPathParams;
}


export class UpdateEnvironmentForRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
