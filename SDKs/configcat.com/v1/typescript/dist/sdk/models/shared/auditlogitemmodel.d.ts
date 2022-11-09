import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AuditLogItemModel extends SpeakeasyBase {
    actionTarget?: string;
    auditLogDateTime?: Date;
    auditLogId?: number;
    auditLogType?: string;
    details?: string;
    userEmail?: string;
    userName?: string;
    where?: string;
    why?: string;
}
