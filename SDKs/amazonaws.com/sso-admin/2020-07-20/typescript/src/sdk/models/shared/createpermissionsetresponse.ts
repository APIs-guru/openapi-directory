import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionSet } from "./permissionset";



export class CreatePermissionSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PermissionSet" })
  permissionSet?: PermissionSet;
}
