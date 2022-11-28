import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPipelinePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline_uuid" })
  pipelineUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class StopPipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPipelinePathParams;
}


export class StopPipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
