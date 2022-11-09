import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=known_host_uuid" })
  knownHostUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRepositoryPipelineKnownHostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineKnownHost?: Map<string, any>;
}
