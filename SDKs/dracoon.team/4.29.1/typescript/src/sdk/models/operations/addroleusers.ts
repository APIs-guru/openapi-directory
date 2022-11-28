import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddRoleUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class AddRoleUsersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class AddRoleUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddRoleUsersPathParams;

  @SpeakeasyMetadata()
  headers: AddRoleUsersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserIds;
}


export class AddRoleUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roleUserList?: shared.RoleUserList;

  @SpeakeasyMetadata()
  statusCode: number;
}
