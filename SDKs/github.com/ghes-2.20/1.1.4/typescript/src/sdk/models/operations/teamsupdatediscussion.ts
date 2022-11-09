import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsUpdateDiscussionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsUpdateDiscussionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class TeamsUpdateDiscussionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsUpdateDiscussionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateDiscussionRequestBody;
}


export class TeamsUpdateDiscussionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussion?: shared.TeamDiscussion;
}
