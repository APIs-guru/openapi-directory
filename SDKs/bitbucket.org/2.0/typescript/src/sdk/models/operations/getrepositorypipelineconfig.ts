import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRepositoryPipelineConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoryPipelineConfigPathParams;
}


export class GetRepositoryPipelineConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pipelinesConfig?: Map<string, any>;
}
