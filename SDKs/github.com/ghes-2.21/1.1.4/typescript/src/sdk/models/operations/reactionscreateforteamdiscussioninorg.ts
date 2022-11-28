import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReactionsCreateForTeamDiscussionInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionInOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsCreateForTeamDiscussionInOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionInOrgRequestBody;
}


export class ReactionsCreateForTeamDiscussionInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reaction?: shared.Reaction;
}
