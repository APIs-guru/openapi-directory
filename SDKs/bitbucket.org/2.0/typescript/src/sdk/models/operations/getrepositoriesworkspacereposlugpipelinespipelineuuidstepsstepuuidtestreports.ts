import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pipeline_uuid" })
  pipelineUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=step_uuid" })
  stepUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsPathParams;
}


export class GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
