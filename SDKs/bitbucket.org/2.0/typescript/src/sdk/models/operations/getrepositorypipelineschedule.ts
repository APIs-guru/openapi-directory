import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=schedule_uuid" })
  scheduleUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoryPipelineSchedulePathParams;
}


export class GetRepositoryPipelineScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineSchedule?: Map<string, any>;
}
