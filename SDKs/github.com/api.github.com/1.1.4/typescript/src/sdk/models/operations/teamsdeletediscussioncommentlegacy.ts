import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamsDeleteDiscussionCommentLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsDeleteDiscussionCommentLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsDeleteDiscussionCommentLegacyPathParams;
}


export class TeamsDeleteDiscussionCommentLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
