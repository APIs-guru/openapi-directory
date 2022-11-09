import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsCreateForTeamDiscussionInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsCreateForTeamDiscussionInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionInOrgRequestBody;
}


export class ReactionsCreateForTeamDiscussionInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reaction?: shared.Reaction;
}
