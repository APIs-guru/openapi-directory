import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPipelineStepForRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pipeline_uuid" })
  pipelineUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=step_uuid" })
  stepUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetPipelineStepForRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPipelineStepForRepositoryPathParams;
}


export class GetPipelineStepForRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineStep?: Map<string, any>;
}
