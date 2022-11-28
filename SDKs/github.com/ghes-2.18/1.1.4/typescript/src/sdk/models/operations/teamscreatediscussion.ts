import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCreateDiscussionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCreateDiscussionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsCreateDiscussionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}


export class TeamsCreateDiscussionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCreateDiscussionPathParams;

  @SpeakeasyMetadata()
  headers: TeamsCreateDiscussionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateDiscussionRequestBody;
}


export class TeamsCreateDiscussionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamDiscussion?: shared.TeamDiscussion;
}
