import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RdsDatabase
/** 
 * The database details of an Amazon RDS database.
**/
export class RdsDatabase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceIdentifier" })
  instanceIdentifier: string;
}
