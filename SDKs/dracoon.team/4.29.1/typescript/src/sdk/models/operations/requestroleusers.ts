import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestRoleUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class RequestRoleUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RequestRoleUsersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRoleUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestRoleUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestRoleUsersQueryParams;

  @SpeakeasyMetadata()
  headers: RequestRoleUsersHeaders;
}


export class RequestRoleUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roleUserList?: shared.RoleUserList;

  @SpeakeasyMetadata()
  statusCode: number;
}
