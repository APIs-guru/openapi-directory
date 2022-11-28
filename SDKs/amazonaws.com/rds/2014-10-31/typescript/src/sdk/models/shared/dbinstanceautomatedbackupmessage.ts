import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceAutomatedBackup } from "./dbinstanceautomatedbackup";



// DbInstanceAutomatedBackupMessage
/** 
 *  Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action. 
**/
export class DbInstanceAutomatedBackupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbInstanceAutomatedBackup })
  dbInstanceAutomatedBackups?: DbInstanceAutomatedBackup[];

  @SpeakeasyMetadata()
  marker?: string;
}
