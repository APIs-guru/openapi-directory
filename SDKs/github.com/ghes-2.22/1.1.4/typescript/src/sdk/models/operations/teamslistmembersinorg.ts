import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsListMembersInOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_slug" })
  teamSlug: string;
}

export enum TeamsListMembersInOrgRoleEnum {
    Member = "member"
,    Maintainer = "maintainer"
,    All = "all"
}


export class TeamsListMembersInOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: TeamsListMembersInOrgRoleEnum;
}


export class TeamsListMembersInOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsListMembersInOrgPathParams;

  @Metadata()
  queryParams: TeamsListMembersInOrgQueryParams;
}


export class TeamsListMembersInOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];
}
