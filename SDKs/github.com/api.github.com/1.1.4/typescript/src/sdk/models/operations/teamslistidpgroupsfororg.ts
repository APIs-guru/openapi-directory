import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsListIdpGroupsForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class TeamsListIdpGroupsForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListIdpGroupsForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsListIdpGroupsForOrgPathParams;

  @Metadata()
  queryParams: TeamsListIdpGroupsForOrgQueryParams;
}


export class TeamsListIdpGroupsForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  groupMapping?: shared.GroupMapping;
}
