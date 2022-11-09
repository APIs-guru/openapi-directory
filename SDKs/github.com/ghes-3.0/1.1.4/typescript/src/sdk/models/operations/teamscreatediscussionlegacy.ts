import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreateDiscussionLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsCreateDiscussionLegacyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=title" })
  title: string;
}


export class TeamsCreateDiscussionLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreateDiscussionLegacyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateDiscussionLegacyRequestBody;
}


export class TeamsCreateDiscussionLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussion?: shared.TeamDiscussion;
}
