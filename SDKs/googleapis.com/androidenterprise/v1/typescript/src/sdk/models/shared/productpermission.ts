import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProductPermissionStateEnum {
    Required = "required"
,    Accepted = "accepted"
}


// ProductPermission
/** 
 * A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin. The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.
**/
export class ProductPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @Metadata({ data: "json, name=state" })
  state?: ProductPermissionStateEnum;
}
