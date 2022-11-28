import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsGetDiscussionInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsGetDiscussionInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsGetDiscussionInOrgPathParams;
}


export class TeamsGetDiscussionInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamDiscussion?: shared.TeamDiscussion;
}
