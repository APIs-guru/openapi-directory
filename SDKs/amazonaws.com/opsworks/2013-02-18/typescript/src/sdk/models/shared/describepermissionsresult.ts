import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Permission } from "./permission";


// DescribePermissionsResult
/** 
 * Contains the response to a <code>DescribePermissions</code> request.
**/
export class DescribePermissionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: Permission[];
}
