import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurityOption3;
}


export class GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernamePermissionsRepositoriesRepoSlugPathParams;

  @Metadata()
  queryParams: GetTeamsUsernamePermissionsRepositoriesRepoSlugQueryParams;

  @Metadata()
  security: GetTeamsUsernamePermissionsRepositoriesRepoSlugSecurity;
}


export class GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
