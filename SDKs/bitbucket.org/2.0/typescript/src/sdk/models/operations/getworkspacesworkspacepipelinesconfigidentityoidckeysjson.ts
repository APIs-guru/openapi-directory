import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonPathParams;
}


export class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
