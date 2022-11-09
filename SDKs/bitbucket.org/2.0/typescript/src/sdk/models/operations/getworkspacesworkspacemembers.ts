import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspacesWorkspaceMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetWorkspacesWorkspaceMembersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWorkspacesWorkspaceMembersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetWorkspacesWorkspaceMembersSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetWorkspacesWorkspaceMembersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetWorkspacesWorkspaceMembersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetWorkspacesWorkspaceMembersSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetWorkspacesWorkspaceMembersSecurityOption3;
}


export class GetWorkspacesWorkspaceMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspacesWorkspaceMembersPathParams;

  @Metadata()
  security: GetWorkspacesWorkspaceMembersSecurity;
}


export class GetWorkspacesWorkspaceMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
