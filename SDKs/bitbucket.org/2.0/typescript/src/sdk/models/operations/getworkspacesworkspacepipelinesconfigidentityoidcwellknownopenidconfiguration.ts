import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams;
}


export class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
