import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreateDiscussionCommentLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCreateDiscussionCommentLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class TeamsCreateDiscussionCommentLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreateDiscussionCommentLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateDiscussionCommentLegacyRequestBody;
}


export class TeamsCreateDiscussionCommentLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussionComment?: shared.TeamDiscussionComment;
}
