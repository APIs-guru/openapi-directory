import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List History Export Results
**/
export declare class HistoryExportResultEntity extends SpeakeasyBase {
    action?: string;
    createdAt?: number;
    destination?: string;
    failureType?: string;
    fileId?: number;
    folder?: string;
    id?: number;
    interface?: string;
    ip?: string;
    parentId?: number;
    path?: string;
    src?: string;
    targetExpiresAt?: number;
    targetId?: number;
    targetName?: string;
    targetPermission?: string;
    targetPermissionSet?: string;
    targetPlatform?: string;
    targetRecursive?: boolean;
    targetUserId?: number;
    targetUsername?: string;
    userId?: number;
    username?: string;
}
