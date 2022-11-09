import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsDeleteDiscussionCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsDeleteDiscussionCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsDeleteDiscussionCommentPathParams;
}


export class TeamsDeleteDiscussionCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
