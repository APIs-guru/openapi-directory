import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPermissionGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=permissionGroupId" })
  permissionGroupId: number;
}


export class GetPermissionGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPermissionGroupPathParams;
}


export class GetPermissionGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  permissionGroupModel?: shared.PermissionGroupModel;

  @Metadata()
  statusCode: number;
}
