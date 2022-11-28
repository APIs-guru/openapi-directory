import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackupRetentionCount" })
  backupRetentionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=DisableAutomatedBackup" })
  disableAutomatedBackup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;
}
