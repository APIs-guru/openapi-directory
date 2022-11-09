import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsCreateForTeamDiscussionCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class ReactionsCreateForTeamDiscussionCommentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}

export enum ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsCreateForTeamDiscussionCommentPathParams;

  @Metadata()
  headers: ReactionsCreateForTeamDiscussionCommentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionCommentRequestBody;
}


export class ReactionsCreateForTeamDiscussionCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reaction?: shared.Reaction;
}
