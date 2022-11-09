import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreateDiscussionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCreateDiscussionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsCreateDiscussionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=title" })
  title: string;
}


export class TeamsCreateDiscussionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreateDiscussionPathParams;

  @Metadata()
  headers: TeamsCreateDiscussionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateDiscussionRequestBody;
}


export class TeamsCreateDiscussionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussion?: shared.TeamDiscussion;
}
