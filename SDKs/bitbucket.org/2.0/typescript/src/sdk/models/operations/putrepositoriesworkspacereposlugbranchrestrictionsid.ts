import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurityOption3;
}


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  branchrestriction?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
