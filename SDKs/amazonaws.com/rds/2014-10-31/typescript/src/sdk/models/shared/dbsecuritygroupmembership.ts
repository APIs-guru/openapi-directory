import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbSecurityGroupMembership
/** 
 * <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> <li> <p> <code>RestoreDBInstanceToPointInTime</code> </p> </li> </ul>
**/
export class DbSecurityGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
