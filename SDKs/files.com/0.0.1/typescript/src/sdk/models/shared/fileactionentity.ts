import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileActionEntity
/** 
 * Move file/folder
**/
export class FileActionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file_migration_id" })
  fileMigrationId?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
