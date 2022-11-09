import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileActionEntity
/** 
 * Move file/folder
**/
export class FileActionEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=file_migration_id" })
  fileMigrationId?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
