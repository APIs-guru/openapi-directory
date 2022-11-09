import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRepositoryPipelineConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoryPipelineConfigPathParams;
}


export class GetRepositoryPipelineConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pipelinesConfig?: Map<string, any>;
}
