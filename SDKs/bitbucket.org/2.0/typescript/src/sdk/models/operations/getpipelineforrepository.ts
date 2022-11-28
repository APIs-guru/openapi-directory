import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPipelineForRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline_uuid" })
  pipelineUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetPipelineForRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineForRepositoryPathParams;
}


export class GetPipelineForRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipeline?: Map<string, any>;
}
