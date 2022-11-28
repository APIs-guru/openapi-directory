import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePermissionGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionGroupId" })
  permissionGroupId: number;
}


export class DeletePermissionGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePermissionGroupPathParams;
}


export class DeletePermissionGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
