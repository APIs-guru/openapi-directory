import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsDeleteDiscussionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsDeleteDiscussionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsDeleteDiscussionPathParams;
}


export class TeamsDeleteDiscussionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
