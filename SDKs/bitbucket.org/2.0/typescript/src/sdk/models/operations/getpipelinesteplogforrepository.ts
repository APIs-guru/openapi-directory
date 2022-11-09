import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPipelineStepLogForRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pipeline_uuid" })
  pipelineUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=step_uuid" })
  stepUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetPipelineStepLogForRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPipelineStepLogForRepositoryPathParams;
}


export class GetPipelineStepLogForRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
