import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCreateDiscussionCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCreateDiscussionCommentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsCreateDiscussionCommentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;
}


export class TeamsCreateDiscussionCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCreateDiscussionCommentPathParams;

  @SpeakeasyMetadata()
  headers: TeamsCreateDiscussionCommentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateDiscussionCommentRequestBody;
}


export class TeamsCreateDiscussionCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamDiscussionComment?: shared.TeamDiscussionComment;
}
