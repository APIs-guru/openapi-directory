import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePermissionGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class CreatePermissionGroupRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createPermissionGroupRequest?: shared.CreatePermissionGroupRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createPermissionGroupRequest1?: shared.CreatePermissionGroupRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createPermissionGroupRequest2?: shared.CreatePermissionGroupRequest;
}


export class CreatePermissionGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePermissionGroupPathParams;

  @SpeakeasyMetadata()
  request: CreatePermissionGroupRequests;
}


export class CreatePermissionGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permissionGroupModel?: shared.PermissionGroupModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
