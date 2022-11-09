import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=binary" })
  binary?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=context" })
  context?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore_whitespace" })
  ignoreWhitespace?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=merge" })
  merge?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=renames" })
  renames?: boolean;
}


export class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption3;
}


export class GetRepositoriesWorkspaceRepoSlugDiffSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams;

  @Metadata()
  queryParams: GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams;

  @Metadata()
  security: GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugDiffSpecResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
