import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestRoleGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class RequestRoleGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RequestRoleGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRoleGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestRoleGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestRoleGroupsQueryParams;

  @SpeakeasyMetadata()
  headers: RequestRoleGroupsHeaders;
}


export class RequestRoleGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roleGroupList?: shared.RoleGroupList;

  @SpeakeasyMetadata()
  statusCode: number;
}
