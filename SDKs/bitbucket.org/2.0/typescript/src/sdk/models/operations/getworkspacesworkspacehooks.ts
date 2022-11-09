import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspacesWorkspaceHooksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspaceHooksSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWorkspacesWorkspaceHooksSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetWorkspacesWorkspaceHooksSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetWorkspacesWorkspaceHooksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetWorkspacesWorkspaceHooksSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetWorkspacesWorkspaceHooksSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetWorkspacesWorkspaceHooksSecurityOption3;
}


export class GetWorkspacesWorkspaceHooksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspaceHooksPathParams;

  @Metadata()
  security: GetWorkspacesWorkspaceHooksSecurity;
}


export class GetWorkspacesWorkspaceHooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedWebhookSubscriptions?: shared.PaginatedWebhookSubscriptions;
}
