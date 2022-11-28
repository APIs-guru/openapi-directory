import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schedule_uuid" })
  scheduleUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoryPipelineScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRepositoryPipelineSchedulePathParams;
}


export class DeleteRepositoryPipelineScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
