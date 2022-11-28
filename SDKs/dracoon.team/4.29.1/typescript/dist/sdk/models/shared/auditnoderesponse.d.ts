import { SpeakeasyBase } from "../../../internal/utils";
import { AuditUserPermission } from "./audituserpermission";
import { UserInfo } from "./userinfo";
/**
 * Audit node report
**/
export declare class AuditNodeResponse extends SpeakeasyBase {
    auditUserPermissionList: AuditUserPermission[];
    nodeCntChildren: number;
    nodeCreatedAt?: Date;
    nodeCreatedBy?: UserInfo;
    nodeHasActivitiesLog?: boolean;
    nodeHasRecycleBin?: boolean;
    nodeId: number;
    nodeIsEncrypted?: boolean;
    nodeName: string;
    nodeParentId?: number;
    nodeParentPath: string;
    nodeQuota?: number;
    nodeRecycleBinRetentionPeriod?: number;
    nodeSize?: number;
    nodeUpdatedAt?: Date;
    nodeUpdatedBy?: UserInfo;
}
