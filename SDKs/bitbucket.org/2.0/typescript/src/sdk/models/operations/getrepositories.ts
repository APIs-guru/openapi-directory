import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRepositoriesRoleEnum {
    Admin = "admin"
,    Contributor = "contributor"
,    Member = "member"
,    Owner = "owner"
}


export class GetRepositoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: GetRepositoriesRoleEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetRepositoriesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetRepositoriesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetRepositoriesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetRepositoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetRepositoriesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetRepositoriesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetRepositoriesSecurityOption3;
}


export class GetRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRepositoriesQueryParams;

  @Metadata()
  security: GetRepositoriesSecurity;
}


export class GetRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  paginatedRepositories?: shared.PaginatedRepositories;
}
