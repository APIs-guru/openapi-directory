import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReactionsCreateForTeamDiscussionCommentLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionCommentLegacyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionCommentLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsCreateForTeamDiscussionCommentLegacyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionCommentLegacyRequestBody;
}


export class ReactionsCreateForTeamDiscussionCommentLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reaction?: shared.Reaction;
}
