import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RevokeRoleUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class RevokeRoleUsersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RevokeRoleUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeRoleUsersPathParams;

  @SpeakeasyMetadata()
  headers: RevokeRoleUsersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserIds;
}


export class RevokeRoleUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roleUserList?: shared.RoleUserList;

  @SpeakeasyMetadata()
  statusCode: number;
}
