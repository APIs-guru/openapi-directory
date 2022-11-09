import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePermissionGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=permissionGroupId" })
  permissionGroupId: number;
}


export class DeletePermissionGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePermissionGroupPathParams;
}


export class DeletePermissionGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
