import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";



// AuditUserPermission
/** 
 * Audit user permissions report
**/
export class AuditUserPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: NodePermissions;

  @SpeakeasyMetadata({ data: "json, name=userFirstName" })
  userFirstName: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: number;

  @SpeakeasyMetadata({ data: "json, name=userLastName" })
  userLastName: string;

  @SpeakeasyMetadata({ data: "json, name=userLogin" })
  userLogin: string;
}
