import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption3;
}


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams;

  @Metadata()
  security: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  branchrestriction?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
