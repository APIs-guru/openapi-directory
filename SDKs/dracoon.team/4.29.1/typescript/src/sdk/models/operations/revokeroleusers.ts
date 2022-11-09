import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RevokeRoleUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class RevokeRoleUsersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RevokeRoleUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RevokeRoleUsersPathParams;

  @Metadata()
  headers: RevokeRoleUsersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserIds;
}


export class RevokeRoleUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roleUserList?: shared.RoleUserList;

  @Metadata()
  statusCode: number;
}
