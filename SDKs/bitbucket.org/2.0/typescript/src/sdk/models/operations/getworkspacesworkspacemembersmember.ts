import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspacesWorkspaceMembersMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=member" })
  member: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspaceMembersMemberSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWorkspacesWorkspaceMembersMemberSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetWorkspacesWorkspaceMembersMemberSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetWorkspacesWorkspaceMembersMemberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetWorkspacesWorkspaceMembersMemberSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetWorkspacesWorkspaceMembersMemberSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetWorkspacesWorkspaceMembersMemberSecurityOption3;
}


export class GetWorkspacesWorkspaceMembersMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspaceMembersMemberPathParams;

  @Metadata()
  security: GetWorkspacesWorkspaceMembersMemberSecurity;
}


export class GetWorkspacesWorkspaceMembersMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  workspaceMembership?: Map<string, any>;
}
