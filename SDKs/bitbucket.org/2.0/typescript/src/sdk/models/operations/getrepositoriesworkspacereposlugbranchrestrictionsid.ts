import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams;

  @SpeakeasyMetadata()
  security: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  branchrestriction?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
