import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsGetDiscussionCommentLegacyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsGetDiscussionCommentLegacyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsGetDiscussionCommentLegacyPathParams;
}


export class TeamsGetDiscussionCommentLegacyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussionComment?: shared.TeamDiscussionComment;
}
