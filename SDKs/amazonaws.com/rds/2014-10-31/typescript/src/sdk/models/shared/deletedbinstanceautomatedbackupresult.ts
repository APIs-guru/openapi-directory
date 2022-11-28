import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceAutomatedBackup } from "./dbinstanceautomatedbackup";



export class DeleteDbInstanceAutomatedBackupResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstanceAutomatedBackup?: DbInstanceAutomatedBackup;
}
