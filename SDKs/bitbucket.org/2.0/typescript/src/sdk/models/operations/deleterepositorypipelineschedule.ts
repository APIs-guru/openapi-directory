import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=schedule_uuid" })
  scheduleUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoryPipelineScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoryPipelineSchedulePathParams;
}


export class DeleteRepositoryPipelineScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
