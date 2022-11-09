import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateRepositoryPipelineKnownHostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateRepositoryPipelineKnownHostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineKnownHost?: Map<string, any>;
}
