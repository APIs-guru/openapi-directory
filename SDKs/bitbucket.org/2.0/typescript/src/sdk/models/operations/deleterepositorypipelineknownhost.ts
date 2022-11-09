import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=known_host_uuid" })
  knownHostUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoryPipelineKnownHostPathParams;
}


export class DeleteRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
