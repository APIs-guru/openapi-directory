import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsDeleteDiscussionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsDeleteDiscussionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsDeleteDiscussionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsDeleteDiscussionPathParams;

  @Metadata()
  headers: TeamsDeleteDiscussionHeaders;
}


export class TeamsDeleteDiscussionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
