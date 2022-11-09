import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRepositoryBuildNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateRepositoryBuildNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRepositoryBuildNumberPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdateRepositoryBuildNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineBuildNumber?: Map<string, any>;
}
