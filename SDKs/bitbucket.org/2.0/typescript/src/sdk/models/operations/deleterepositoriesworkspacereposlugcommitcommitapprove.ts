import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit" })
  commit: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams;

  @SpeakeasyMetadata()
  security: DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity;
}


export class DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;
}
