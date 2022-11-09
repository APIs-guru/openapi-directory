import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWorkspacesWorkspaceHooksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostWorkspacesWorkspaceHooksSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostWorkspacesWorkspaceHooksSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostWorkspacesWorkspaceHooksSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostWorkspacesWorkspaceHooksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostWorkspacesWorkspaceHooksSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostWorkspacesWorkspaceHooksSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostWorkspacesWorkspaceHooksSecurityOption3;
}


export class PostWorkspacesWorkspaceHooksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWorkspacesWorkspaceHooksPathParams;

  @Metadata()
  security: PostWorkspacesWorkspaceHooksSecurity;
}


export class PostWorkspacesWorkspaceHooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  webhookSubscription?: Map<string, any>;
}
