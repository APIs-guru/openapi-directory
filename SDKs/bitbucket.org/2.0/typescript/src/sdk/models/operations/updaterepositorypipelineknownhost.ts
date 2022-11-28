import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=known_host_uuid" })
  knownHostUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRepositoryPipelineKnownHostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineKnownHost?: Map<string, any>;
}
