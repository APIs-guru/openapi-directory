import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsUpdateDiscussionCommentLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsUpdateDiscussionCommentLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class TeamsUpdateDiscussionCommentLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsUpdateDiscussionCommentLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateDiscussionCommentLegacyRequestBody;
}


export class TeamsUpdateDiscussionCommentLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussionComment?: shared.TeamDiscussionComment;
}
