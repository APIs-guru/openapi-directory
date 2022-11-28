import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsListDiscussionCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsListDiscussionCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListDiscussionCommentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsListDiscussionCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsListDiscussionCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: TeamsListDiscussionCommentsQueryParams;

  @SpeakeasyMetadata()
  headers: TeamsListDiscussionCommentsHeaders;
}


export class TeamsListDiscussionCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamDiscussionComment })
  teamDiscussionComments?: shared.TeamDiscussionComment[];
}
