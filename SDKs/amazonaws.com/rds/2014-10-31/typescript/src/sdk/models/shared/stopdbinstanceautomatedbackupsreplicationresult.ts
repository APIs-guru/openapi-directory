import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceAutomatedBackup } from "./dbinstanceautomatedbackup";



export class StopDbInstanceAutomatedBackupsReplicationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstanceAutomatedBackup?: DbInstanceAutomatedBackup;
}
