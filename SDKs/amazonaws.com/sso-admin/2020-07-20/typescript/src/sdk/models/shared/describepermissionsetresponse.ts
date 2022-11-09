import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionSet } from "./permissionset";


export class DescribePermissionSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PermissionSet" })
  permissionSet?: PermissionSet;
}
