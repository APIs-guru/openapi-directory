import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBackupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackupId" })
  backupId: string;
}
