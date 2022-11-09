import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsUpdateDiscussionCommentInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsUpdateDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class TeamsUpdateDiscussionCommentInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsUpdateDiscussionCommentInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateDiscussionCommentInOrgRequestBody;
}


export class TeamsUpdateDiscussionCommentInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussionComment?: shared.TeamDiscussionComment;
}
