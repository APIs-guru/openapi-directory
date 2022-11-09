import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRepositoryPipelineConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateRepositoryPipelineConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRepositoryPipelineConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdateRepositoryPipelineConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pipelinesConfig?: Map<string, any>;
}
