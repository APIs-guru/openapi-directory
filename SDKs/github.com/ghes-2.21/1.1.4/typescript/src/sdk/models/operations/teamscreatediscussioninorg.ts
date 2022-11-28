import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCreateDiscussionInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsCreateDiscussionInOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}


export class TeamsCreateDiscussionInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCreateDiscussionInOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateDiscussionInOrgRequestBody;
}


export class TeamsCreateDiscussionInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamDiscussion?: shared.TeamDiscussion;
}
