import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsDeleteDiscussionCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsDeleteDiscussionCommentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsDeleteDiscussionCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsDeleteDiscussionCommentPathParams;

  @SpeakeasyMetadata()
  headers: TeamsDeleteDiscussionCommentHeaders;
}


export class TeamsDeleteDiscussionCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
