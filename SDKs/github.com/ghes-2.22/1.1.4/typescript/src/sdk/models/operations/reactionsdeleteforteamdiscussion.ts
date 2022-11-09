import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReactionsDeleteForTeamDiscussionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class ReactionsDeleteForTeamDiscussionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsDeleteForTeamDiscussionPathParams;
}


export class ReactionsDeleteForTeamDiscussionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
