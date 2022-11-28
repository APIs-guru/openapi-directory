import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReactionsCreateForTeamDiscussionLegacyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionLegacyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionLegacyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsCreateForTeamDiscussionLegacyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionLegacyRequestBody;
}


export class ReactionsCreateForTeamDiscussionLegacyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reaction?: shared.Reaction;
}
