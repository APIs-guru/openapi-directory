import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReactionsCreateForTeamDiscussionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class ReactionsCreateForTeamDiscussionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}

export enum ReactionsCreateForTeamDiscussionRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}


export class ReactionsCreateForTeamDiscussionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: ReactionsCreateForTeamDiscussionRequestBodyContentEnum;
}


export class ReactionsCreateForTeamDiscussionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsCreateForTeamDiscussionPathParams;

  @SpeakeasyMetadata()
  headers: ReactionsCreateForTeamDiscussionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReactionsCreateForTeamDiscussionRequestBody;
}


export class ReactionsCreateForTeamDiscussionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reaction?: shared.Reaction;
}
