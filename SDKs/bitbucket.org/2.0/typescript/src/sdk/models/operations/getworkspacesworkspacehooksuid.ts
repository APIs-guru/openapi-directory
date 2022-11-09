import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspacesWorkspaceHooksUidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspaceHooksUidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWorkspacesWorkspaceHooksUidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetWorkspacesWorkspaceHooksUidSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetWorkspacesWorkspaceHooksUidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetWorkspacesWorkspaceHooksUidSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetWorkspacesWorkspaceHooksUidSecurityOption3;
}


export class GetWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspaceHooksUidPathParams;

  @Metadata()
  security: GetWorkspacesWorkspaceHooksUidSecurity;
}


export class GetWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  webhookSubscription?: Map<string, any>;
}
