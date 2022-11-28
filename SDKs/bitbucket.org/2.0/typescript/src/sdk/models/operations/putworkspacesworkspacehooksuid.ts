import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutWorkspacesWorkspaceHooksUidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PutWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutWorkspacesWorkspaceHooksUidPathParams;

  @SpeakeasyMetadata()
  security: PutWorkspacesWorkspaceHooksUidSecurity;
}


export class PutWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  webhookSubscription?: Map<string, any>;
}
