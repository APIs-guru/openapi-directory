import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePermissionGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionGroupId" })
  permissionGroupId: number;
}


export class UpdatePermissionGroupRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  updatePermissionGroupRequest?: shared.UpdatePermissionGroupRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updatePermissionGroupRequest1?: shared.UpdatePermissionGroupRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  updatePermissionGroupRequest2?: shared.UpdatePermissionGroupRequest;
}


export class UpdatePermissionGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePermissionGroupPathParams;

  @SpeakeasyMetadata()
  request: UpdatePermissionGroupRequests;
}


export class UpdatePermissionGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permissionGroupModel?: shared.PermissionGroupModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
