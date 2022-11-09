import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption3;
}


export class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams;

  @Metadata()
  security: DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity;
}


export class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
