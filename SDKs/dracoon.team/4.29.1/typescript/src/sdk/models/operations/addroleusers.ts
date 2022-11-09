import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddRoleUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class AddRoleUsersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class AddRoleUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddRoleUsersPathParams;

  @Metadata()
  headers: AddRoleUsersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserIds;
}


export class AddRoleUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roleUserList?: shared.RoleUserList;

  @Metadata()
  statusCode: number;
}
