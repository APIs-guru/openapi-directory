import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteWorkspacesWorkspaceHooksUidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteWorkspacesWorkspaceHooksUidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteWorkspacesWorkspaceHooksUidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteWorkspacesWorkspaceHooksUidSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteWorkspacesWorkspaceHooksUidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteWorkspacesWorkspaceHooksUidSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteWorkspacesWorkspaceHooksUidSecurityOption3;
}


export class DeleteWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWorkspacesWorkspaceHooksUidPathParams;

  @Metadata()
  security: DeleteWorkspacesWorkspaceHooksUidSecurity;
}


export class DeleteWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
