import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_key" })
  projectKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteWorkspacesWorkspaceProjectsProjectKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteWorkspacesWorkspaceProjectsProjectKeySecurityOption3;
}


export class DeleteWorkspacesWorkspaceProjectsProjectKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams;

  @Metadata()
  security: DeleteWorkspacesWorkspaceProjectsProjectKeySecurity;
}


export class DeleteWorkspacesWorkspaceProjectsProjectKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
