import { SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceAutomatedBackup } from "./dbinstanceautomatedbackup";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action.
**/
export declare class DbInstanceAutomatedBackupMessage extends SpeakeasyBase {
    dbInstanceAutomatedBackups?: DbInstanceAutomatedBackup[];
    marker?: string;
}
