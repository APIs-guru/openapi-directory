import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRepositoriesWorkspaceRepoSlugIssuesImportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PostRepositoriesWorkspaceRepoSlugIssuesImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRepositoriesWorkspaceRepoSlugIssuesImportPathParams;

  @SpeakeasyMetadata()
  security: PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity;
}


export class PostRepositoriesWorkspaceRepoSlugIssuesImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  issueJobStatus?: shared.IssueJobStatus;
}
