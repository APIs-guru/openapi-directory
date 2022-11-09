import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutWorkspacesWorkspaceProjectsProjectKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_key" })
  projectKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutWorkspacesWorkspaceProjectsProjectKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutWorkspacesWorkspaceProjectsProjectKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutWorkspacesWorkspaceProjectsProjectKeySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutWorkspacesWorkspaceProjectsProjectKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutWorkspacesWorkspaceProjectsProjectKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutWorkspacesWorkspaceProjectsProjectKeySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutWorkspacesWorkspaceProjectsProjectKeySecurityOption3;
}


export class PutWorkspacesWorkspaceProjectsProjectKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutWorkspacesWorkspaceProjectsProjectKeyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PutWorkspacesWorkspaceProjectsProjectKeySecurity;
}


export class PutWorkspacesWorkspaceProjectsProjectKeyResponse extends SpeakeasyBase {
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
