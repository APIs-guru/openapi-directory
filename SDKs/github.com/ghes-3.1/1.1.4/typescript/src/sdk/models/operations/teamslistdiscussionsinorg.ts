import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsListDiscussionsInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}


export class TeamsListDiscussionsInOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.DirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pinned" })
  pinned?: string;
}


export class TeamsListDiscussionsInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsListDiscussionsInOrgPathParams;

  @Metadata()
  queryParams: TeamsListDiscussionsInOrgQueryParams;
}


export class TeamsListDiscussionsInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamDiscussion })
  teamDiscussions?: shared.TeamDiscussion[];
}
