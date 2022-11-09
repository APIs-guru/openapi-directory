import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsListDiscussionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsListDiscussionsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class TeamsListDiscussionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: TeamsListDiscussionsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListDiscussionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsListDiscussionsPathParams;

  @Metadata()
  queryParams: TeamsListDiscussionsQueryParams;
}


export class TeamsListDiscussionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamDiscussion })
  teamDiscussions?: shared.TeamDiscussion[];
}
