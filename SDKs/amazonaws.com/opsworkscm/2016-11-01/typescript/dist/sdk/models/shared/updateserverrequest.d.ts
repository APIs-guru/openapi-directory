import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateServerRequest extends SpeakeasyBase {
    backupRetentionCount?: number;
    disableAutomatedBackup?: boolean;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    serverName: string;
}
