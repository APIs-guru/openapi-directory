import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsListProjectsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_id" })
  teamId: number;
}


export class TeamsListProjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListProjectsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class TeamsListProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsListProjectsPathParams;

  @SpeakeasyMetadata()
  queryParams: TeamsListProjectsQueryParams;

  @SpeakeasyMetadata()
  headers: TeamsListProjectsHeaders;
}


export class TeamsListProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamProject })
  teamProjects?: shared.TeamProject[];
}
