import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupRetentionCount" })
  backupRetentionCount?: number;

  @Metadata({ data: "json, name=DisableAutomatedBackup" })
  disableAutomatedBackup?: boolean;

  @Metadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName: string;
}
