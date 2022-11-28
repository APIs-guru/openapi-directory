import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRepositoryBuildNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateRepositoryBuildNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRepositoryBuildNumberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdateRepositoryBuildNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineBuildNumber?: Map<string, any>;
}
