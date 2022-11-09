import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReactionsDeleteForTeamDiscussionCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class ReactionsDeleteForTeamDiscussionCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsDeleteForTeamDiscussionCommentPathParams;
}


export class ReactionsDeleteForTeamDiscussionCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
