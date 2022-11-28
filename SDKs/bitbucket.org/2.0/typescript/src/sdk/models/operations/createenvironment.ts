import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEnvironmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deploymentEnvironment?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
