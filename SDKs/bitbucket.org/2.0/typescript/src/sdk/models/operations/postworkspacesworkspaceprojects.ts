import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWorkspacesWorkspaceProjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostWorkspacesWorkspaceProjectsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostWorkspacesWorkspaceProjectsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostWorkspacesWorkspaceProjectsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostWorkspacesWorkspaceProjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostWorkspacesWorkspaceProjectsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostWorkspacesWorkspaceProjectsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostWorkspacesWorkspaceProjectsSecurityOption3;
}


export class PostWorkspacesWorkspaceProjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWorkspacesWorkspaceProjectsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PostWorkspacesWorkspaceProjectsSecurity;
}


export class PostWorkspacesWorkspaceProjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  project?: Map<string, any>;
}
