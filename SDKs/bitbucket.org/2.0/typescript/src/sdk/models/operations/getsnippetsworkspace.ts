import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSnippetsWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}

export enum GetSnippetsWorkspaceRoleEnum {
    Owner = "owner"
,    Contributor = "contributor"
,    Member = "member"
}


export class GetSnippetsWorkspaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: GetSnippetsWorkspaceRoleEnum;
}


export class GetSnippetsWorkspaceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetSnippetsWorkspaceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetSnippetsWorkspaceSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetSnippetsWorkspaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetSnippetsWorkspaceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetSnippetsWorkspaceSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetSnippetsWorkspaceSecurityOption3;
}


export class GetSnippetsWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSnippetsWorkspacePathParams;

  @Metadata()
  queryParams: GetSnippetsWorkspaceQueryParams;

  @Metadata()
  security: GetSnippetsWorkspaceSecurity;
}


export class GetSnippetsWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedSnippets?: shared.PaginatedSnippets;
}
