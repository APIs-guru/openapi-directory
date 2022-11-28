import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReactionsCreateForTeamDiscussionCommentInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionCommentInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsCreateForTeamDiscussionCommentInOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionCommentInOrgRequestBody;
}


export class ReactionsCreateForTeamDiscussionCommentInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reaction?: shared.Reaction;
}
