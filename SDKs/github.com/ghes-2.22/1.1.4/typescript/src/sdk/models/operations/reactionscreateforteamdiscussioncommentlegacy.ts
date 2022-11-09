import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsCreateForTeamDiscussionCommentLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionCommentLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionCommentLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsCreateForTeamDiscussionCommentLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionCommentLegacyRequestBody;
}


export class ReactionsCreateForTeamDiscussionCommentLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reaction?: shared.Reaction;
}
