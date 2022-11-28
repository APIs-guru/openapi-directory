import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalPermissions } from "./principalpermissions";
import { DataLakePrincipal } from "./datalakeprincipal";



// DataLakeSettings
/** 
 * A structure representing a list of AWS Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
**/
export class DataLakeSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateDatabaseDefaultPermissions", elemType: PrincipalPermissions })
  createDatabaseDefaultPermissions?: PrincipalPermissions[];

  @SpeakeasyMetadata({ data: "json, name=CreateTableDefaultPermissions", elemType: PrincipalPermissions })
  createTableDefaultPermissions?: PrincipalPermissions[];

  @SpeakeasyMetadata({ data: "json, name=DataLakeAdmins", elemType: DataLakePrincipal })
  dataLakeAdmins?: DataLakePrincipal[];

  @SpeakeasyMetadata({ data: "json, name=TrustedResourceOwners" })
  trustedResourceOwners?: string[];
}
