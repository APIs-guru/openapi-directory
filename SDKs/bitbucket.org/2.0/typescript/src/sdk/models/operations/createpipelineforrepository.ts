import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePipelineForRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreatePipelineForRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreatePipelineForRepositoryPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreatePipelineForRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipeline?: Map<string, any>;
}
