import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetWorkspacesRoleEnum {
    Owner = "owner"
,    Collaborator = "collaborator"
,    Member = "member"
}


export class GetWorkspacesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: GetWorkspacesRoleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetWorkspacesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetWorkspacesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetWorkspacesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetWorkspacesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetWorkspacesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetWorkspacesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetWorkspacesSecurityOption3;
}


export class GetWorkspacesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWorkspacesQueryParams;

  @Metadata()
  security: GetWorkspacesSecurity;
}


export class GetWorkspacesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedWorkspaces?: shared.PaginatedWorkspaces;
}
