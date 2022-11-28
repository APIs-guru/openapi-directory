import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsListDiscussionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}

export enum TeamsListDiscussionsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class TeamsListDiscussionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: TeamsListDiscussionsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListDiscussionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsListDiscussionsPathParams;

  @SpeakeasyMetadata()
  queryParams: TeamsListDiscussionsQueryParams;
}


export class TeamsListDiscussionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamDiscussion })
  teamDiscussions?: shared.TeamDiscussion[];
}
