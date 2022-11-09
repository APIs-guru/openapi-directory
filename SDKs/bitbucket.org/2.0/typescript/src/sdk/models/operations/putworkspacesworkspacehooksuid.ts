import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutWorkspacesWorkspaceHooksUidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutWorkspacesWorkspaceHooksUidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutWorkspacesWorkspaceHooksUidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutWorkspacesWorkspaceHooksUidSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutWorkspacesWorkspaceHooksUidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutWorkspacesWorkspaceHooksUidSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutWorkspacesWorkspaceHooksUidSecurityOption3;
}


export class PutWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutWorkspacesWorkspaceHooksUidPathParams;

  @Metadata()
  security: PutWorkspacesWorkspaceHooksUidSecurity;
}


export class PutWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  webhookSubscription?: Map<string, any>;
}
