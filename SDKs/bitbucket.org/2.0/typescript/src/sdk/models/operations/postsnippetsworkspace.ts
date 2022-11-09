import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSnippetsWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostSnippetsWorkspaceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostSnippetsWorkspaceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostSnippetsWorkspaceSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostSnippetsWorkspaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostSnippetsWorkspaceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostSnippetsWorkspaceSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostSnippetsWorkspaceSecurityOption3;
}


export class PostSnippetsWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSnippetsWorkspacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PostSnippetsWorkspaceSecurity;
}


export class PostSnippetsWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  snippet?: Map<string, any>;
}
