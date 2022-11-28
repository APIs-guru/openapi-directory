import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPermissionGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class GetPermissionGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPermissionGroupsPathParams;
}


export class GetPermissionGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PermissionGroupModel })
  permissionGroupModels?: shared.PermissionGroupModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
