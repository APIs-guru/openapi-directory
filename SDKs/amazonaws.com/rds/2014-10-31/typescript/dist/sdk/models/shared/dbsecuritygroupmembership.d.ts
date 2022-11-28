import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> <li> <p> <code>RestoreDBInstanceToPointInTime</code> </p> </li> </ul>
**/
export declare class DbSecurityGroupMembership extends SpeakeasyBase {
    dbSecurityGroupName?: string;
    status?: string;
}
