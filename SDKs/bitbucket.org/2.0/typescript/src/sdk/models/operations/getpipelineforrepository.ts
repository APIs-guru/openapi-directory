import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPipelineForRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pipeline_uuid" })
  pipelineUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetPipelineForRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPipelineForRepositoryPathParams;
}


export class GetPipelineForRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipeline?: Map<string, any>;
}
