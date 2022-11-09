import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddRoleGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class AddRoleGroupsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class AddRoleGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddRoleGroupsPathParams;

  @Metadata()
  headers: AddRoleGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GroupIds;
}


export class AddRoleGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roleGroupList?: shared.RoleGroupList;

  @Metadata()
  statusCode: number;
}
