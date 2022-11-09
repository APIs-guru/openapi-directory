import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore_whitespace" })
  ignoreWhitespace?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=merge" })
  merge?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=renames" })
  renames?: boolean;
}


export class GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurityOption3;
}


export class GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams;

  @Metadata()
  queryParams: GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams;

  @Metadata()
  security: GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedDiffstats?: shared.PaginatedDiffstats;
}
