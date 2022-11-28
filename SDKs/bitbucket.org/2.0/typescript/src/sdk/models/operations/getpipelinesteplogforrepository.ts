import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPipelineStepLogForRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline_uuid" })
  pipelineUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=step_uuid" })
  stepUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetPipelineStepLogForRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPipelineStepLogForRepositoryPathParams;
}


export class GetPipelineStepLogForRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
