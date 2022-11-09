import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreateDiscussionInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsCreateDiscussionInOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=title" })
  title: string;
}


export class TeamsCreateDiscussionInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreateDiscussionInOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateDiscussionInOrgRequestBody;
}


export class TeamsCreateDiscussionInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDiscussion?: shared.TeamDiscussion;
}
