import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteWorkspacesWorkspaceHooksUidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class DeleteWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWorkspacesWorkspaceHooksUidPathParams;

  @SpeakeasyMetadata()
  security: DeleteWorkspacesWorkspaceHooksUidSecurity;
}


export class DeleteWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
