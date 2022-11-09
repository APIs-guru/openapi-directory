import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreateDiscussionCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCreateDiscussionCommentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsCreateDiscussionCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class TeamsCreateDiscussionCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreateDiscussionCommentPathParams;

  @Metadata()
  headers: TeamsCreateDiscussionCommentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateDiscussionCommentRequestBody;
}


export class TeamsCreateDiscussionCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussionComment?: shared.TeamDiscussionComment;
}
