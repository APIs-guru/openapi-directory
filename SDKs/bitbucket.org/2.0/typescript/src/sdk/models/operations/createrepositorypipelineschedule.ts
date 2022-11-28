import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateRepositoryPipelineScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateRepositoryPipelineSchedulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreateRepositoryPipelineScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineSchedule?: Map<string, any>;
}
