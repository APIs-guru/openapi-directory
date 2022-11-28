import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsUpdateDiscussionCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsUpdateDiscussionCommentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;
}


export class TeamsUpdateDiscussionCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsUpdateDiscussionCommentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateDiscussionCommentRequestBody;
}


export class TeamsUpdateDiscussionCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamDiscussionComment?: shared.TeamDiscussionComment;
}
