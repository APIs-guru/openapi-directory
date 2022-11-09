import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RdsDatabase
/** 
 * The database details of an Amazon RDS database.
**/
export class RdsDatabase extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=InstanceIdentifier" })
  instanceIdentifier: string;
}
