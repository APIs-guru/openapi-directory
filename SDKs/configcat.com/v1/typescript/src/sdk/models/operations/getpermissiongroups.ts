import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPermissionGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetPermissionGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPermissionGroupsPathParams;
}


export class GetPermissionGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PermissionGroupModel })
  permissionGroupModels?: shared.PermissionGroupModel[];

  @Metadata()
  statusCode: number;
}
