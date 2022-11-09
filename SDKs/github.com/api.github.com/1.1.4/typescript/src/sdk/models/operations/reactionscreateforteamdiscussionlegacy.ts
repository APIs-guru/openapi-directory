import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReactionsCreateForTeamDiscussionLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum {
    Plus1 = "+1"
,    Minus1 = "-1"
,    Laugh = "laugh"
,    Confused = "confused"
,    Heart = "heart"
,    Hooray = "hooray"
,    Rocket = "rocket"
,    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsCreateForTeamDiscussionLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionLegacyRequestBody;
}


export class ReactionsCreateForTeamDiscussionLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  reaction?: shared.Reaction;
}
