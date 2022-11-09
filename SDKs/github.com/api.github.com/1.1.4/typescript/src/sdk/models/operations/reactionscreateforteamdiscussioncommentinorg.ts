import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsCreateForTeamDiscussionCommentInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionCommentInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsCreateForTeamDiscussionCommentInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionCommentInOrgRequestBody;
}


export class ReactionsCreateForTeamDiscussionCommentInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reaction?: shared.Reaction;
}
