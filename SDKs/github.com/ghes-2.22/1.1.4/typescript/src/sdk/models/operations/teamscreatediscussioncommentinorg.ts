import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreateDiscussionCommentInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsCreateDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class TeamsCreateDiscussionCommentInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreateDiscussionCommentInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateDiscussionCommentInOrgRequestBody;
}


export class TeamsCreateDiscussionCommentInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussionComment?: shared.TeamDiscussionComment;
}
