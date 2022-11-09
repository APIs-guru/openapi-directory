import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsUpdateDiscussionInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsUpdateDiscussionInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class TeamsUpdateDiscussionInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsUpdateDiscussionInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateDiscussionInOrgRequestBody;
}


export class TeamsUpdateDiscussionInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussion?: shared.TeamDiscussion;
}
