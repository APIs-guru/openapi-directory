import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";



// DescribePermissionsResult
/** 
 * Contains the response to a <code>DescribePermissions</code> request.
**/
export class DescribePermissionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Permissions", elemType: Permission })
  permissions?: Permission[];
}
