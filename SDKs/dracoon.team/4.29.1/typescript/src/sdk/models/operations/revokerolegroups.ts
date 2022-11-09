import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RevokeRoleGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class RevokeRoleGroupsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RevokeRoleGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RevokeRoleGroupsPathParams;

  @Metadata()
  headers: RevokeRoleGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GroupIds;
}


export class RevokeRoleGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roleGroupList?: shared.RoleGroupList;

  @Metadata()
  statusCode: number;
}
