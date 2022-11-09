import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePermissionGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class CreatePermissionGroupRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createPermissionGroupRequest?: shared.CreatePermissionGroupRequest;

  @Metadata({ data: "request, media_type=application/json" })
  createPermissionGroupRequest1?: shared.CreatePermissionGroupRequest;

  @Metadata({ data: "request, media_type=text/json" })
  createPermissionGroupRequest2?: shared.CreatePermissionGroupRequest;
}


export class CreatePermissionGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreatePermissionGroupPathParams;

  @Metadata()
  request: CreatePermissionGroupRequests;
}


export class CreatePermissionGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  permissionGroupModel?: shared.PermissionGroupModel;

  @Metadata()
  statusCode: number;
}
