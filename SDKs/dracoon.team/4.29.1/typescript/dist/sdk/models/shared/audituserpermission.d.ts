import { SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
/**
 * Audit user permissions report
**/
export declare class AuditUserPermission extends SpeakeasyBase {
    permissions: NodePermissions;
    userFirstName: string;
    userId: number;
    userLastName: string;
    userLogin: string;
}
