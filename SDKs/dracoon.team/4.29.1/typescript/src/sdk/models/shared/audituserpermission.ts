import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodePermissions } from "./nodepermissions";


// AuditUserPermission
/** 
 * Audit user permissions report
**/
export class AuditUserPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions: NodePermissions;

  @Metadata({ data: "json, name=userFirstName" })
  userFirstName: string;

  @Metadata({ data: "json, name=userId" })
  userId: number;

  @Metadata({ data: "json, name=userLastName" })
  userLastName: string;

  @Metadata({ data: "json, name=userLogin" })
  userLogin: string;
}
