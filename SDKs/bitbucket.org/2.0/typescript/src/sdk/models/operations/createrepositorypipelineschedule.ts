import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateRepositoryPipelineScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateRepositoryPipelineSchedulePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreateRepositoryPipelineScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineSchedule?: Map<string, any>;
}
