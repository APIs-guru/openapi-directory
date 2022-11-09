import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestRoleGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class RequestRoleGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RequestRoleGroupsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRoleGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestRoleGroupsPathParams;

  @Metadata()
  queryParams: RequestRoleGroupsQueryParams;

  @Metadata()
  headers: RequestRoleGroupsHeaders;
}


export class RequestRoleGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roleGroupList?: shared.RoleGroupList;

  @Metadata()
  statusCode: number;
}
