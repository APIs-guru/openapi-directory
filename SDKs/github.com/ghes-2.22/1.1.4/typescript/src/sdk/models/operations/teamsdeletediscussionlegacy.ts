import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsDeleteDiscussionLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsDeleteDiscussionLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsDeleteDiscussionLegacyPathParams;
}


export class TeamsDeleteDiscussionLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
