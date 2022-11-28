import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @SpeakeasyMetadata()
  security: PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  branchrestriction?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
