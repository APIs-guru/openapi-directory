import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsListProjectsInOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsListProjectsInOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListProjectsInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsListProjectsInOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: TeamsListProjectsInOrgQueryParams;
}


export class TeamsListProjectsInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamProject })
  teamProjects?: shared.TeamProject[];
}
