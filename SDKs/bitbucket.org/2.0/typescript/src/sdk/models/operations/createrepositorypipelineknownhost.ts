import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateRepositoryPipelineKnownHostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineKnownHost?: Map<string, any>;
}
