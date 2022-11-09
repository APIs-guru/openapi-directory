import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePermissionGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=permissionGroupId" })
  permissionGroupId: number;
}


export class UpdatePermissionGroupRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  updatePermissionGroupRequest?: shared.UpdatePermissionGroupRequest;

  @Metadata({ data: "request, media_type=application/json" })
  updatePermissionGroupRequest1?: shared.UpdatePermissionGroupRequest;

  @Metadata({ data: "request, media_type=text/json" })
  updatePermissionGroupRequest2?: shared.UpdatePermissionGroupRequest;
}


export class UpdatePermissionGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePermissionGroupPathParams;

  @Metadata()
  request: UpdatePermissionGroupRequests;
}


export class UpdatePermissionGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  permissionGroupModel?: shared.PermissionGroupModel;

  @Metadata()
  statusCode: number;
}
