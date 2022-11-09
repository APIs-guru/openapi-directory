import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamsDeleteDiscussionCommentInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_number" })
  commentNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsDeleteDiscussionCommentInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsDeleteDiscussionCommentInOrgPathParams;
}


export class TeamsDeleteDiscussionCommentInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
