import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsListIdpGroupsForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class TeamsListIdpGroupsForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class TeamsListIdpGroupsForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsListIdpGroupsForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: TeamsListIdpGroupsForOrgQueryParams;
}


export class TeamsListIdpGroupsForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  groupMapping?: shared.GroupMapping;
}
