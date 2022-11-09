import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption3;
}


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity;
}


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  branchrestriction?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
