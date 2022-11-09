import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateEnvironmentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deploymentEnvironment?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
