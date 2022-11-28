import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issue_id" })
  issueId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @SpeakeasyMetadata()
  security: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
}


export class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  issueComment?: Map<string, any>;
}
