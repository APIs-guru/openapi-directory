import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revspec" })
  revspec: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams;

  @SpeakeasyMetadata()
  security: GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity;
}


export class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  commit?: Map<string, any>;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
