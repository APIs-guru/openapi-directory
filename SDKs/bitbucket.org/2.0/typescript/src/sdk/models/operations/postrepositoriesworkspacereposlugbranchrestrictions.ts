import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @SpeakeasyMetadata()
  security: PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity;
}


export class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  branchrestriction?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
