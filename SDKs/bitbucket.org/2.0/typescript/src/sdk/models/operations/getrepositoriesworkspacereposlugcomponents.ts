import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoriesWorkspaceRepoSlugComponentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugComponentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetRepositoriesWorkspaceRepoSlugComponentsSecurityOption3;
}


export class GetRepositoriesWorkspaceRepoSlugComponentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugComponentsPathParams;

  @Metadata()
  security: GetRepositoriesWorkspaceRepoSlugComponentsSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugComponentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedComponents?: shared.PaginatedComponents;
}
