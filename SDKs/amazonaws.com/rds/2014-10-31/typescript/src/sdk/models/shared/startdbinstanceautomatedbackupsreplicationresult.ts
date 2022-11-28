import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceAutomatedBackup } from "./dbinstanceautomatedbackup";



export class StartDbInstanceAutomatedBackupsReplicationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstanceAutomatedBackup?: DbInstanceAutomatedBackup;
}
