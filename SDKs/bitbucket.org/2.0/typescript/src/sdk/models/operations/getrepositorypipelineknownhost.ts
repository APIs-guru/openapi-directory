import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=known_host_uuid" })
  knownHostUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoryPipelineKnownHostPathParams;
}


export class GetRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineKnownHost?: Map<string, any>;
}
