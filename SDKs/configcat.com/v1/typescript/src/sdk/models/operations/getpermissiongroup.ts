import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPermissionGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionGroupId" })
  permissionGroupId: number;
}


export class GetPermissionGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPermissionGroupPathParams;
}


export class GetPermissionGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  permissionGroupModel?: shared.PermissionGroupModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
