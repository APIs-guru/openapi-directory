import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReactionsDeleteForTeamDiscussionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class ReactionsDeleteForTeamDiscussionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsDeleteForTeamDiscussionPathParams;
}


export class ReactionsDeleteForTeamDiscussionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
