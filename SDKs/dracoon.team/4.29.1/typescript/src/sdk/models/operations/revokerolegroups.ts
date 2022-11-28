import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RevokeRoleGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=role_id" })
  roleId: number;
}


export class RevokeRoleGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RevokeRoleGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeRoleGroupsPathParams;

  @SpeakeasyMetadata()
  headers: RevokeRoleGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GroupIds;
}


export class RevokeRoleGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roleGroupList?: shared.RoleGroupList;

  @SpeakeasyMetadata()
  statusCode: number;
}
