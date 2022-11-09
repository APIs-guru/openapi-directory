import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsListDiscussionCommentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=discussion_number" })
  discussionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsListDiscussionCommentsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class TeamsListDiscussionCommentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: TeamsListDiscussionCommentsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListDiscussionCommentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsListDiscussionCommentsPathParams;

  @Metadata()
  queryParams: TeamsListDiscussionCommentsQueryParams;
}


export class TeamsListDiscussionCommentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamDiscussionComment })
  teamDiscussionComments?: shared.TeamDiscussionComment[];
}
