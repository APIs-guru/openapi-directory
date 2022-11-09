import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonPathParams;
}


export class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
